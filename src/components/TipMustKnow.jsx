import { useState } from 'react';
import { STR } from '../data/levels';
import Sandbox from './Sandbox';
import Reveal from './Reveal';

export default function TipMustKnow({
  tip, idx, lang,
  levelColor, levelColorSoft, levelColorDeep,
  progress, updateProgress, clearProgress,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const S = STR;
  const status = progress[tip.id]?.status || 'none';
  const stepsDone = progress[tip.id]?.steps || [];
  const stepCount = tip.steps?.length || 0;

  function setStatus(s) {
    if (status === s) clearProgress(tip.id);
    else updateProgress(tip.id, { status: s });
  }

  function toggleStep(i) {
    const next = [...stepsDone];
    next[i] = !next[i];
    const allDone = stepCount > 0 && next.slice(0, stepCount).filter(Boolean).length === stepCount;
    updateProgress(tip.id, {
      steps: next,
      status: allDone ? 'mastered' : (status === 'mastered' ? 'want_to_learn' : status),
    });
  }

  const dotClass = status === 'mastered' ? 'mastered' : status === 'want_to_learn' ? 'want' : '';

  return (
    <div
      className={`tip${open ? ' open' : ''}`}
      style={{ '--lv-color': levelColor, '--lv-soft': levelColorSoft, '--lv-deep': levelColorDeep }}
    >
      <div className="tip-idx">{String(idx).padStart(2, '0')}</div>
      <div className="tip-body">
        <div className="tip-row">
          <div className="tip-main">
            <h3 className="tip-title">{tip.title[lang]}</h3>
            <p className="tip-summary">{tip.summary[lang]}</p>
            <div className="tip-meta">
              <span className={`tip-status-dot${dotClass ? ' ' + dotClass : ''}`} />
              {status === 'mastered' ? (
                <span style={{ color: levelColorDeep, fontWeight: 600 }}>{S.mastered[lang]}</span>
              ) : status === 'want_to_learn' ? (
                <span style={{ color: 'var(--coral-deep)', fontWeight: 600 }}>{S.wantToLearn[lang]}</span>
              ) : (
                <span>{stepCount > 0 ? `${stepCount} ${lang === 'sv' ? 'steg' : 'steps'}` : ''}</span>
              )}
              {tip.demo && (
                <span className="tip-chip try">{S.tryItLive[lang]}</span>
              )}
            </div>
          </div>
          <button className="tip-open" onClick={() => setOpen(o => !o)}>
            {open ? S.collapse[lang] : S.expand[lang]}
          </button>
        </div>

        {open && (
          <div className="tip-detail">
            {stepCount > 0 && (
              <>
                <h4>{S.practiceSteps[lang]}</h4>
                <div className="steps">
                  {tip.steps.map((step, i) => (
                    <div
                      key={i}
                      className={`step${stepsDone[i] ? ' done' : ''}`}
                      onClick={() => toggleStep(i)}
                    >
                      <div className="step-check">
                        <svg width="12" height="12" viewBox="0 0 12 12">
                          <path d="M 2 6 L 5 9 L 10 3" stroke="var(--paper)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="step-text">{step[lang]}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tip.demo?.kind === 'before_after' && (
              <Sandbox demo={tip.demo} lang={lang} accentColor={levelColor} />
            )}
            {tip.demo?.kind === 'reveal' && (
              <Reveal demo={tip.demo} lang={lang} />
            )}
            {tip.demo?.kind === 'code' && (
              <Reveal demo={tip.demo} lang={lang} isCode />
            )}

            <div className="status-row">
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
    </div>
  );
}
