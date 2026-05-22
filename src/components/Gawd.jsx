import { useState, useEffect } from 'react';

const GAWD_PALETTE = {
  '.': null,
  '1': '#D97757',
  '2': '#9E4824',
  '3': '#E8A487',
  '4': '#1A1915',
  '5': '#FAF9F5',
  '6': '#5A1F18',
  'C': '#C25C42',
  's': '#D97757',
};

const TOP_IDLE = [
  "....................",
  "..........s.........",
  "....................",
  ".........11.........",
  "........1111........",
  ".......111111.......",
  "......11111111......",
  ".....1111111111.....",
  "....111111111111....",
  "....111441144111....",
];

const TOP_BLINK = [
  "....................",
  "..........s.........",
  "....................",
  ".........11.........",
  "........1111........",
  ".......111111.......",
  "......11111111......",
  ".....1111111111.....",
  "....111111111111....",
  "....111111111111....",
];

const TOP_SHADOW = [
  "....................",
  "....................",
  "....................",
  ".........44.........",
  "........4444........",
  ".......444444.......",
  "......44444444......",
  ".....4444444444.....",
  "....444444444444....",
  "....444444444444....",
];

const BOT_STATIC = [
  "....111111111111....",
  "....11C111111C11....",
  "....111111111111....",
  "....211111111122....",
  "....211111111122....",
  ".....2111111112.....",
  "......21111112......",
  "......22....22......",
  "......22....22......",
  "....................",
];

function renderPixels(sprite, yOffset = 0) {
  return sprite.flatMap((row, y) =>
    row.split('').map((ch, x) => {
      const fill = GAWD_PALETTE[ch];
      if (!fill) return null;
      return (
        <rect
          key={`${y + yOffset}-${x}`}
          x={x}
          y={y + yOffset}
          width="1.02"
          height="1.02"
          fill={fill}
        />
      );
    })
  );
}

const TALK_FRAMES = [
  { type: 'tip',  angle: -14 },
  { type: 'jump', lift: 2 },
  { type: 'tip',  angle: -24 },
  { type: 'jump', lift: 3 },
];

export default function Gawd({ size = 120, mood = 'idle', message = null, onClick }) {
  const [blinking, setBlinking] = useState(false);
  const [talkFrame, setTalkFrame] = useState(0);
  const [headTurn, setHeadTurn] = useState(0);
  const [mouthShape, setMouthShape] = useState(null);
  const [bodyX, setBodyX] = useState(0);
  const [bodyY, setBodyY] = useState(0);
  const isTalking = mood === 'talking' || !!message;

  useEffect(() => {
    let alive = true;
    const schedule = () => {
      const delay = 2400 + Math.random() * 2600;
      setTimeout(() => {
        if (!alive) return;
        setBlinking(true);
        setTimeout(() => {
          if (!alive) return;
          setBlinking(false);
          schedule();
        }, 140);
      }, delay);
    };
    schedule();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!isTalking) { setTalkFrame(0); return; }
    const id = setInterval(() => setTalkFrame(f => (f + 1) % TALK_FRAMES.length), 135);
    return () => clearInterval(id);
  }, [isTalking]);

  useEffect(() => {
    let alive = true;
    let returnTimer;
    const schedule = () => {
      const delay = 3500 + Math.random() * 4500;
      setTimeout(() => {
        if (!alive) return;
        const angle = (Math.random() < 0.5 ? -1 : 1) * (4 + Math.floor(Math.random() * 4));
        setHeadTurn(angle);
        returnTimer = setTimeout(() => {
          if (!alive) return;
          setHeadTurn(0);
          schedule();
        }, 900 + Math.random() * 700);
      }, delay);
    };
    schedule();
    return () => { alive = false; clearTimeout(returnTimer); };
  }, []);

  useEffect(() => {
    if (isTalking) { setMouthShape(null); return; }
    let alive = true;
    let returnTimer;
    const schedule = () => {
      const delay = 3500 + Math.random() * 5500;
      setTimeout(() => {
        if (!alive) return;
        const shapes = ['line', 'short', 'smirk'];
        setMouthShape(shapes[Math.floor(Math.random() * shapes.length)]);
        returnTimer = setTimeout(() => {
          if (!alive) return;
          setMouthShape(null);
          schedule();
        }, 800 + Math.random() * 500);
      }, delay);
    };
    schedule();
    return () => { alive = false; clearTimeout(returnTimer); };
  }, [isTalking]);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const e = (t - start) / 1000;
      if (isTalking) {
        setBodyY(Math.sin(e * 6.2) * 1.1);
        setBodyX(Math.sin(e * 3.9 + 1) * 0.7);
      } else {
        setBodyY(Math.sin(e * 1.4) * 0.5);
        setBodyX(Math.sin(e * 0.9 + 0.5) * 0.3);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isTalking]);

  const topSprite = blinking && !isTalking ? TOP_BLINK : TOP_IDLE;

  let angle = 0;
  let lift = 0;
  if (isTalking) {
    const f = TALK_FRAMES[talkFrame];
    if (f.type === 'tip') angle = f.angle;
    if (f.type === 'jump') lift = f.lift;
  }

  const mouthPixels = (() => {
    if (!mouthShape) return [];
    if (mouthShape === 'line') return [[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10]];
    if (mouthShape === 'short') return [[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10]];
    if (mouthShape === 'smirk') return [[8,10],[9,10],[10,10],[11,10],[12,10]];
    return [];
  })();

  const SIZE = 20;

  return (
    <div
      className="clawd-root"
      onClick={onClick}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: onClick ? 'pointer' : 'default',
        lineHeight: 0,
      }}
    >
      {message && <div className="clawd-bubble">{message}</div>}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        shapeRendering="crispEdges"
        overflow="visible"
        style={{
          display: 'block',
          imageRendering: 'pixelated',
          transform: `translate(${bodyX}px, ${bodyY}px)`,
          filter: `drop-shadow(0 ${Math.max(1, size / 60)}px 0 rgba(26, 25, 21, 0.18))`,
          overflow: 'visible',
        }}
      >
        {renderPixels(BOT_STATIC, 10)}
        {mouthPixels.map(([x, y], i) => (
          <rect key={`m-${i}`} x={x} y={y} width="1.02" height="1.02" fill="#1A1915" />
        ))}
        <g
          style={{
            transform: `rotate(${headTurn}deg)`,
            transformOrigin: '10px 6px',
            transformBox: 'view-box',
            transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <g
            style={{
              transform: `translate(0px, ${-lift}px) rotate(${angle}deg)`,
              transformOrigin: '4px 10px',
              transformBox: 'view-box',
            }}
          >
            {renderPixels(topSprite, 0)}
          </g>
        </g>
      </svg>
    </div>
  );
}
