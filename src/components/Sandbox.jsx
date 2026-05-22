import { STR } from '../data/levels';

export default function Sandbox({ demo, lang }) {
  const beforePrompt = demo.before[lang];
  const afterPrompt = demo.after[lang];
  const S = STR;

  return (
    <div className="sandbox">
      <div className="sandbox-head">
        <span className="label">{S.liveDemo[lang]}</span>
        <span className="meta">{S.side[lang]}</span>
      </div>
      <div className="sandbox-grid">
        <div className="sandbox-cell before">
          <div className="cell-head">
            <span className="mini-dot" />
            {S.before[lang]}
          </div>
          <div className="sandbox-prompt">{beforePrompt}</div>
          <div className="sandbox-response empty">—</div>
        </div>
        <div className="sandbox-cell after">
          <div className="cell-head">
            <span className="mini-dot" />
            {S.after[lang]}
          </div>
          <div className="sandbox-prompt">{afterPrompt}</div>
          <div className="sandbox-response empty">{S.emptyResponse[lang]}</div>
        </div>
      </div>
    </div>
  );
}
