import { useState, useEffect } from 'react';

export default function useProgress() {
  const [state, setState] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cg.progress') || '{}'); }
    catch { return {}; }
  });

  useEffect(() => {
    function onStorage(e) {
      if (e.key === 'cg.progress') {
        try { setState(JSON.parse(e.newValue || '{}')); } catch {}
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const update = (tipId, patch) => {
    setState(prev => {
      const next = { ...prev, [tipId]: { ...(prev[tipId] || {}), ...patch } };
      try { localStorage.setItem('cg.progress', JSON.stringify(next)); } catch {}
      window.dispatchEvent(new CustomEvent('cg.progress.changed', { detail: next }));
      return next;
    });
  };

  const clear = (tipId) => {
    setState(prev => {
      const next = { ...prev };
      delete next[tipId];
      try { localStorage.setItem('cg.progress', JSON.stringify(next)); } catch {}
      window.dispatchEvent(new CustomEvent('cg.progress.changed', { detail: next }));
      return next;
    });
  };

  return [state, update, clear];
}
