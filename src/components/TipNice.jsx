import { useState } from 'react';
import { STR } from '../data/levels';
import Sandbox from './Sandbox';
import Reveal from './Reveal';

export default function TipNice({
  tip, idx, lang,
  levelColor, levelColorSoft, levelColorDeep,
  progress, updateProgress, clearProgress,
}) {
  const [open, setOpen] = useState(false);
  const S = STR;
  const status = progress[tip.id]?.status || 'none';

  function setStatus(s) {
    if (status === s) clearProgress(tip.id);
    else updateProgress(tip.id, { status: s });
  }

  return (
    <div style={{ '--lv-color': levelColor, '--lv-soft': levelColorSoft, '--lv-deep': levelColorDeep }}>
      <button
        className={`compact-row${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="compact-idx">{String(idx).padStart(2, '0')}</span>
        <span>
          <span className="compact-title" style={{
            color: status === 'mastered' ? 'var(--ink-3)' : 'var(--ink)',
            textDecoration: status === 'mastered' ? 'line-through' : 'none',
            textDecorationColor: levelColor,
          }}>{tip.title[lang]}</span>
          <div className="compact-summary">{tip.summary[lang]}</div>
        </span>
        <span className="compact-arrow">{open ? '–' : '+'}</span>
      </button>
      {open && (
        <div style={{ marginLeft: 32, padding: '8px 16px 18px' }}>
          {tip.demo?.kind === 'before_after' && (
            <Sandbox demo={tip.demo} lang={lang} accentColor={levelColor} />
          )}
          {tip.demo?.kind === 'reveal' && (
            <Reveal demo={tip.demo} lang={lang} />
          )}
          {tip.demo?.kind === 'code' && (
            <Reveal demo={tip.demo} lang={lang} isCode />
          )}
          <div className="status-row" style={{ borderTop: '1px solid var(--line)', marginTop: tip.demo ? 14 : 0 }}>
            <span className="label">{S.status[lang]}</span>
            <button
              className={`status-btn${status === 'want_to_learn' ? ' active want' : ''}`}
              onClick={() => setStatus('want_to_learn')}
            >
              <span className="dot" style={{ background: 'var(--coral)' }} /> {S.wantToLearn[lang]}
            </button>
            <button
              className={`status-btn${status === 'mastered' ? ' active mastered' : ''}`}
              onClick={() => setStatus('mastered')}
            >
              <span className="dot" style={{ background: levelColor }} /> {S.mastered[lang]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
