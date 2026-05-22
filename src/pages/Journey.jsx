import { LEVELS, STR } from '../data/levels';

export default function Journey({ lang, progress, onGoLevel }) {
  const S = STR;

  const allMustKnows = LEVELS.flatMap(l => l.tips.filter(t => t.type === 'must_know').map(t => ({ tip: t, level: l })));
  const totalMust = allMustKnows.length;
  const totalMastered = allMustKnows.filter(({ tip }) => progress[tip.id]?.status === 'mastered').length;
  const pct = totalMust === 0 ? 0 : Math.round((totalMastered / totalMust) * 100);

  const toMaster = LEVELS.map(lv => ({
    level: lv,
    tips: lv.tips.filter(t => t.type === 'must_know' && progress[t.id]?.status !== 'mastered'),
  })).filter(g => g.tips.length > 0);

  const bookmarks = LEVELS.map(lv => ({
    level: lv,
    tips: lv.tips.filter(t => progress[t.id]?.status === 'want_to_learn'),
  })).filter(g => g.tips.length > 0);

  return (
    <div className="fade-in">
      <div className="journey-hero">
        <div>
          <h1>{S.journeyTitle[lang]}</h1>
          <div className="sub">{S.journeySub[lang]}</div>
        </div>
        <div className="journey-stat">
          <div className="big">{pct}<span style={{ fontSize: 36, opacity: 0.7 }}>%</span></div>
          <div className="lbl">{totalMastered} / {totalMust} {S.mustKnowsMastered[lang]}</div>
        </div>
      </div>

      <div className="spectrum">
        {LEVELS.map(lv => {
          const mk = lv.tips.filter(t => t.type === 'must_know');
          const done = mk.filter(t => progress[t.id]?.status === 'mastered').length;
          const lvPct = mk.length === 0 ? 0 : (done / mk.length) * 100;
          return (
            <button
              key={lv.id}
              className="spec-col"
              onClick={() => onGoLevel(lv.id)}
              style={{ background: 'none', border: 'none', textAlign: 'center', cursor: 'pointer', padding: 0 }}
            >
              <div className="spec-bar" style={{ '--spec-color': lv.color }}>
                <div className="spec-fill" style={{ height: `${lvPct}%`, background: lv.color }} />
                <div className="roman">{lv.roman}</div>
              </div>
              <div className="spec-cap">{done}/{mk.length}</div>
            </button>
          );
        })}
      </div>

      <section className="journey-section">
        <div className="section-head">
          <h2>{S.toMaster[lang]}</h2>
          {toMaster.length > 0 ? (
            <span className="count">{toMaster.reduce((a, g) => a + g.tips.length, 0)} {S.remaining[lang]}</span>
          ) : (
            <span className="count" style={{ color: '#5A8C5D' }}>{S.allDone[lang]}</span>
          )}
        </div>
        {toMaster.length === 0 ? (
          <div className="empty-card">{S.emptyMaster[lang]}</div>
        ) : (
          <div>
            {toMaster.map(g => (
              <button
                key={g.level.id}
                className="journey-card"
                onClick={() => onGoLevel(g.level.id)}
                style={{
                  '--card-color': g.level.color,
                  '--card-soft': g.level.colorSoft,
                  '--card-deep': g.level.colorDeep,
                  width: '100%',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                <div className="head">
                  <span className="chip">{S.level[lang]} {g.level.roman}</span>
                  <h3>{g.level.title[lang]}</h3>
                  <span className="arrow">→</span>
                </div>
                <ul>
                  {g.tips.map(t => <li key={t.id}>{t.title[lang]}</li>)}
                </ul>
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="journey-section">
        <div className="section-head">
          <h2>{S.bookmarks[lang]}</h2>
          <span className="count">{bookmarks.reduce((a, g) => a + g.tips.length, 0)} {S.bookmarked[lang]}</span>
        </div>
        {bookmarks.length === 0 ? (
          <div className="empty-card">{S.emptyBookmarks[lang]}</div>
        ) : (
          <div>
            {bookmarks.map(g => (
              <button
                key={g.level.id}
                className="journey-card"
                onClick={() => onGoLevel(g.level.id)}
                style={{
                  '--card-color': 'var(--coral)',
                  '--card-soft': 'var(--coral-soft)',
                  '--card-deep': 'var(--coral-deep)',
                  width: '100%',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                <div className="head">
                  <span className="chip">{S.level[lang]} {g.level.roman} · {g.level.title[lang]}</span>
                  <span className="arrow" style={{ marginLeft: 'auto' }}>→</span>
                </div>
                <ul>
                  {g.tips.map(t => <li key={t.id}>{t.title[lang]}</li>)}
                </ul>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
