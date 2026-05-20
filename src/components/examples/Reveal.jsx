import { useState } from 'react'

export default function Reveal({ example }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4 rounded-lg border border-gray-800 overflow-hidden">
      <div className="p-4 bg-gray-900/50">
        <div className="text-xs text-gray-500 font-medium mb-2 tracking-wide">Question</div>
        <p className="text-sm text-gray-300 leading-relaxed">{example.question}</p>
      </div>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-300 bg-gray-900 hover:bg-gray-800/60 transition-all border-t border-gray-800 font-medium"
        >
          Reveal answer ↓
        </button>
      ) : (
        <div className="p-4 bg-gray-900 border-t border-gray-800 animate-fade-in">
          <div className="text-xs text-green-400 font-medium mb-2 tracking-wide">Answer</div>
          <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed font-sans">
            {example.answer}
          </pre>
        </div>
      )}
    </div>
  )
}
