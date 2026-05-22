import { LEVELS, STR } from '../data/levels';
import TipMustKnow from '../components/TipMustKnow';
import TipNice from '../components/TipNice';

export default function LevelView({ level, lang, progress, updateProgress, clearProgress, onGoLevel }) {
  const mustKnows = level.tips.filter(t => t.type === 'must_know');
  const niceToHaves = level.tips.filter(t => t.type === 'nice_to_have');
  const S = STR;

  const styleVars = {
    '--lv-color': level.color,
    '--lv-soft': level.colorSoft,
    '--lv-deep': level.colorDeep,
  };

  return (
    <div className="fade-in" style={styleVars}>
      <div className="lv-head">
        <div className="lv-numeral">{String(level.id).padStart(2, '0')}</div>
        <div className="lv-text">
          <div className="lv-eyebrow">
            <span className="dot" />
            {S.level[lang]} {level.id} / 6 · {S.mentalModel[lang]}
          </div>
          <h1 className="lv-title">{level.title[lang]}</h1>
          <div className="lv-tagline">{level.model[lang]}</div>
          <p className="lv-desc">{level.description[lang]}</p>
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>{S.mustKnow[lang]}</h2>
          <span className="count">{String(mustKnows.length).padStart(2, '0')}</span>
          <span className="hint">{S.coreSkills[lang]}</span>
        </div>
        <div>
          {mustKnows.map((tip, i) => (
            <TipMustKnow
              key={tip.id}
              tip={tip}
              idx={i + 1}
              lang={lang}
              levelColor={level.color}
              levelColorSoft={level.colorSoft}
              levelColorDeep={level.colorDeep}
              progress={progress}
              updateProgress={updateProgress}
              clearProgress={clearProgress}
            />
          ))}
        </div>
      </section>

      {niceToHaves.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2>{S.niceToHave[lang]}</h2>
            <span className="count">{String(niceToHaves.length).padStart(2, '0')}</span>
            <span className="hint">{S.goDeeper[lang]}</span>
          </div>
          <div className="compact">
            {niceToHaves.map((tip, i) => (
              <TipNice
                key={tip.id}
                tip={tip}
                idx={i + 1}
                lang={lang}
                levelColor={level.color}
                levelColorSoft={level.colorSoft}
                levelColorDeep={level.colorDeep}
                progress={progress}
                updateProgress={updateProgress}
                clearProgress={clearProgress}
              />
            ))}
          </div>
        </section>
      )}

      {level.transition && (
        <section className="section" style={{ marginTop: 40 }}>
          <div style={{
            padding: '28px 32px',
            background: level.colorSoft,
            borderRadius: 16,
            borderLeft: `4px solid ${level.color}`,
          }}>
            <div className="eyebrow" style={{ color: level.colorDeep, marginBottom: 10 }}>
              {S.whenYouReReady[lang]} →
            </div>
            <p className="serif" style={{
              fontSize: 22,
              fontStyle: 'italic',
              color: 'var(--ink-2)',
              margin: 0,
              maxWidth: '50ch',
              fontWeight: 400,
              lineHeight: 1.35,
            }}>
              "{level.transition[lang]}"
            </p>
          </div>
        </section>
      )}

      <nav className="lv-footer">
        {level.id > 1 ? (
          <button className="lv-footer-btn" onClick={() => onGoLevel(level.id - 1)}>
            <span className="lf-eyebrow">← {S.prev[lang]} · {S.level[lang]} {level.id - 1}</span>
            <span className="lf-title">{LEVELS[level.id - 2].title[lang]}</span>
          </button>
        ) : <span />}
        {level.id < 6 ? (
          <button className="lv-footer-btn right" onClick={() => onGoLevel(level.id + 1)}>
            <span className="lf-eyebrow">{S.next[lang]} · {S.level[lang]} {level.id + 1} →</span>
            <span className="lf-title">{LEVELS[level.id].title[lang]}</span>
          </button>
        ) : <span />}
      </nav>
    </div>
  );
}
