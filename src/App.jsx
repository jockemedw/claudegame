import { useState, useEffect, useRef } from 'react';
import { LEVELS, STR } from './data/levels';
import useProgress from './hooks/useProgress';
import Gawd from './components/Gawd';
import Rail from './components/Rail';
import LevelView from './pages/LevelView';
import Journey from './pages/Journey';

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('cg.lang') || 'en'; } catch { return 'en'; }
  });
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('cg.theme');
      if (saved) return saved;
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch { return 'light'; }
  });
  const [view, setView] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cg.view') || '{"type":"home"}'); }
    catch { return { type: 'home' }; }
  });
  const [progress, updateProgress, clearProgress] = useProgress();
  const [clawdMessage, setClawdMessage] = useState(null);
  const [clawdMood, setClawdMood] = useState('idle');

  useEffect(() => { try { localStorage.setItem('cg.lang', lang); } catch {} }, [lang]);
  useEffect(() => { try { localStorage.setItem('cg.view', JSON.stringify(view)); } catch {} }, [view]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('cg.theme', theme); } catch {}
  }, [theme]);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const lastProgressRef = useRef(progress);
  useEffect(() => {
    const S = STR;
    const prev = lastProgressRef.current;
    let newlyMastered = null;
    for (const id in progress) {
      if (progress[id]?.status === 'mastered' && prev[id]?.status !== 'mastered') {
        newlyMastered = id;
        break;
      }
    }
    if (newlyMastered) {
      const total = LEVELS.flatMap(l => l.tips.filter(t => t.type === 'must_know')).length;
      const mastered = LEVELS
        .flatMap(l => l.tips.filter(t => t.type === 'must_know'))
        .filter(t => progress[t.id]?.status === 'mastered').length;
      let msg = S.clawdMastered[lang];
      if (mastered === total) msg = S.clawdAllDone[lang];
      else if (mastered === Math.floor(total / 2)) msg = S.clawdHalfway[lang];
      setClawdMood('talking');
      setClawdMessage(msg);
      const t = setTimeout(() => { setClawdMessage(null); setClawdMood('idle'); }, 3200);
      return () => clearTimeout(t);
    }
    lastProgressRef.current = progress;
  }, [progress, lang]);

  function progressFor(levelId) {
    const lv = LEVELS.find(l => l.id === levelId);
    const mk = lv.tips.filter(t => t.type === 'must_know');
    const mastered = mk.filter(t => progress[t.id]?.status === 'mastered').length;
    return { mastered, mustKnowTotal: mk.length };
  }

  const S = STR;
  const goHome = () => setView({ type: 'home' });
  const goLevel = (id) => setView({ type: 'level', id });
  const goJourney = () => setView({ type: 'journey' });
  const currentLevel = view.type === 'level' ? view.id : null;

  return (
    <div className="app">
      <TopBar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} view={view} goHome={goHome} goJourney={goJourney} />

      {view.type !== 'home' && (
        <Rail currentLevel={currentLevel} onPick={goLevel} lang={lang} progressFor={progressFor} />
      )}

      <main className="main">
        {view.type === 'home' && (
          <HomeView lang={lang} onStart={() => goLevel(1)} onJourney={goJourney} onPickLevel={goLevel} progressFor={progressFor} />
        )}
        {view.type === 'level' && (
          <LevelView
            level={LEVELS.find(l => l.id === view.id) || LEVELS[0]}
            lang={lang}
            progress={progress}
            updateProgress={updateProgress}
            clearProgress={clearProgress}
            onGoLevel={goLevel}
          />
        )}
        {view.type === 'journey' && (
          <Journey lang={lang} progress={progress} onGoLevel={goLevel} />
        )}
      </main>

      {view.type !== 'home' && (
        <div className="clawd-float">
          <Gawd
            size={84}
            mood={clawdMood}
            message={clawdMessage}
            onClick={() => {
              const msgs = [S.clawdHello[lang], S.clawdLevel[lang]];
              setClawdMessage(msgs[Math.floor(Math.random() * msgs.length)]);
              setClawdMood('talking');
              setTimeout(() => { setClawdMessage(null); setClawdMood('idle'); }, 2800);
            }}
          />
        </div>
      )}
    </div>
  );
}

function TopBar({ lang, setLang, theme, setTheme, view, goHome, goJourney }) {
  const S = STR;
  const isDark = theme === 'dark';
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" onClick={goHome} aria-label="Home">
          <span className="sparkle">✦</span>
          <span>{S.brand[lang]}</span>
        </button>
        <div className="top-nav">
          <button
            className={view.type === 'home' || view.type === 'level' ? 'active' : ''}
            onClick={goHome}
          >
            {S.levels[lang]}
          </button>
          <button
            className={view.type === 'journey' ? 'active' : ''}
            onClick={goJourney}
          >
            {S.journey[lang]}
          </button>
          <button
            className="theme-toggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="8" cy="8" r="3" />
                <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 9.5A6 6 0 1 1 6.5 2.5a5 5 0 0 0 7 7Z" />
              </svg>
            )}
          </button>
          <div className="lang-toggle">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'sv' ? 'active' : ''} onClick={() => setLang('sv')}>SV</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeGawd({ lang }) {
  const [msg, setMsg] = useState(null);
  const [mood, setMood] = useState('idle');
  const S = STR;
  const lines = [
    S.clawdHello[lang],
    S.clawdLevel[lang],
    lang === 'sv' ? 'Klicka på en nivå för att börja.' : 'Pick a level to begin.',
  ];
  function speak() {
    const m = lines[Math.floor(Math.random() * lines.length)];
    setMsg(m);
    setMood('talking');
    clearTimeout(window.__gawdHomeTimer);
    window.__gawdHomeTimer = setTimeout(() => { setMsg(null); setMood('idle'); }, 2600);
  }
  return <Gawd size={280} mood={mood} message={msg} onClick={speak} />;
}

function HomeView({ lang, onStart, onJourney, onPickLevel, progressFor }) {
  const S = STR;
  return (
    <div className="fade-in">
      <div className="home-hero">
        <div>
          <div className="lv-eyebrow" style={{ marginBottom: 20 }}>
            <span className="dot" style={{ background: 'var(--coral)' }} />
            {lang === 'sv' ? 'En guide för att tänka med Claude' : 'A guide to thinking with Claude'}
          </div>
          <h1>
            {S.introHero[lang].split('.')[0]}.<br />
            <em>{S.introHeroAccent[lang]}</em>
          </h1>
          <p className="lede">{S.introLede[lang]}</p>
          <div className="ctas">
            <button className="btn" onClick={onStart}>{S.start[lang]} →</button>
            <button className="btn ghost" onClick={onJourney}>{S.jumpJourney[lang]}</button>
          </div>
        </div>
        <div className="home-clawd">
          <HomeGawd lang={lang} />
        </div>
      </div>

      <section style={{ marginTop: 24, marginBottom: 60 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--line)',
        }}>
          <h2 className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em', fontWeight: 400 }}>
            {lang === 'sv' ? 'Resan i sex nivåer' : 'The six levels'}
          </h2>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            {S.level1To6[lang]}
          </span>
        </div>
        <div className="home-spectrum">
          {LEVELS.map((lv) => {
            const p = progressFor(lv.id);
            const pct = p.mustKnowTotal === 0 ? 0 : (p.mastered / p.mustKnowTotal) * 100;
            return (
              <button
                key={lv.id}
                className="home-spec"
                onClick={() => onPickLevel(lv.id)}
                style={{ '--c': lv.color, '--cs': lv.colorSoft, '--cd': lv.colorDeep }}
              >
                <div className="home-spec-bar">
                  <div className="home-spec-fill" style={{ width: `${pct}%` }} />
                  <div className="home-spec-numeral">{String(lv.id).padStart(2, '0')}</div>
                </div>
                <div className="home-spec-meta">
                  <div className="home-spec-eyebrow">
                    {S.level[lang]} {lv.id} · {lv.id < 3 ? (lang === 'sv' ? 'Nybörjare' : 'Beginner') : lv.id < 5 ? (lang === 'sv' ? 'Mellan' : 'Intermediate') : (lang === 'sv' ? 'Avancerad' : 'Advanced')}
                  </div>
                  <div className="home-spec-title">{lv.title[lang]}</div>
                  <div className="home-spec-model">{lv.model[lang]}</div>
                </div>
                <div className="home-spec-progress">
                  {p.mustKnowTotal > 0 ? `${p.mastered}/${p.mustKnowTotal}` : ''}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: 56, marginBottom: 40 }}>
        <div className="home-notes">
          <div className="note">
            <div className="note-num">01</div>
            <h3 className="serif">{lang === 'sv' ? 'Sex mentala modeller' : 'Six mental models'}</h3>
            <p>{lang === 'sv'
              ? 'Inte 100 promptar att memorera — sex sätt att tänka om AI, byggda på varandra.'
              : 'Not 100 prompts to memorize — six ways of thinking about AI that build on each other.'}</p>
          </div>
          <div className="note">
            <div className="note-num">02</div>
            <h3 className="serif">{lang === 'sv' ? 'Före/efter-jämförelser' : 'Before/after comparisons'}</h3>
            <p>{lang === 'sv'
              ? 'Se skillnaden mellan en vag och en tydlig prompt, sida vid sida.'
              : 'See the difference between a vague and a clear prompt, side by side.'}</p>
          </div>
          <div className="note">
            <div className="note-num">03</div>
            <h3 className="serif">{lang === 'sv' ? 'Spara din takt' : 'Track your pace'}</h3>
            <p>{lang === 'sv'
              ? 'Markera vad du vill lära dig, vad du bemästrat. Allt sparas lokalt — ingen inloggning.'
              : "Mark what you want to learn, what you've mastered. Saved locally — no login."}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
