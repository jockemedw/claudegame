import { useState } from 'react';
import { STR } from '../data/levels';

export default function Reveal({ demo, lang, isCode = false }) {
  const [open, setOpen] = useState(false);
  const S = STR;
  return (
    <div className={`reveal${open ? ' open' : ''}`}>
      <div className="reveal-q">{demo.q?.[lang] || (lang === 'sv' ? 'Förklaring' : 'Explanation')}</div>
      <button className="reveal-btn" onClick={() => setOpen(o => !o)}>
        {open ? S.hideAnswer[lang] : S.showAnswer[lang]}
      </button>
      {open && (
        isCode
          ? <div className="reveal-a code">{demo.a}</div>
          : <div className="reveal-a">{typeof demo.a === 'string' ? demo.a : demo.a[lang]}</div>
      )}
    </div>
  );
}
