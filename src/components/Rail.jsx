import { LEVELS, STR } from '../data/levels';

export default function Rail({ currentLevel, onPick, lang, progressFor }) {
  return (
    <div className="rail-wrap">
      <div className="rail" role="tablist" aria-label="Levels">
        {LEVELS.map((lv) => {
          const isActive = currentLevel === lv.id;
          const prog = progressFor(lv.id);
          const dots = Array.from({ length: prog.mustKnowTotal }, (_, i) => i < prog.mastered);
          return (
            <button
              key={lv.id}
              role="tab"
              aria-selected={isActive}
              className={`rail-seg${isActive ? ' active' : ''}`}
              style={{ '--seg-color': lv.color, '--seg-soft': lv.colorSoft }}
              onClick={() => onPick(lv.id)}
            >
              <span className="rail-bar" />
              <span className="rail-num">{lv.roman}</span>
              <span className="rail-title">{lv.title[lang]}</span>
              <span className="rail-sub">
                <span className="rail-dots">
                  {dots.map((on, i) => (
                    <span key={i} className={`rail-dot${on ? ' on' : ''}`} />
                  ))}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="rail-tiers">
        {[
          { label: STR.tierBeginner[lang], range: [1, 2] },
          { label: STR.tierIntermediate[lang], range: [3, 4] },
          { label: STR.tierAdvanced[lang], range: [5, 6] },
        ].map((tier, i) => {
          const active = currentLevel != null && currentLevel >= tier.range[0] && currentLevel <= tier.range[1];
          return (
            <div key={i} className={`rail-tier${active ? ' active' : ''}`}>
              <span className="rail-tier-label">{tier.label}</span>
              {active && <span className="rail-tier-marker" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
