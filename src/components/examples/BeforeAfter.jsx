import { useState } from 'react'

export default function BeforeAfter({ example }) {
  const [shown, setShown] = useState(false)

  return (
    <div className="mt-4 rounded-lg overflow-hidden border border-gray-800">
      <div className="bg-gray-800/40 px-4 py-2 text-xs text-gray-500 font-medium tracking-wide">
        {example.label || 'See the difference'}
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-800">
        <div className="p-4 bg-gray-900/50">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-xs text-red-400 font-medium">Before</span>
          </div>
          {example.before.note && (
            <div className="text-xs text-gray-600 mb-2 italic">{example.before.note}</div>
          )}
          <div className="font-mono text-xs text-gray-300 bg-gray-950 rounded-lg p-3 leading-relaxed border border-gray-800">
            {example.before.prompt}
          </div>
        </div>
        <div className="p-4 bg-gray-900/50">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-green-400 font-medium">After</span>
          </div>
          {example.after.note && (
            <div className="text-xs text-gray-600 mb-2 italic">{example.after.note}</div>
          )}
          <div className="font-mono text-xs text-gray-300 bg-gray-950 rounded-lg p-3 leading-relaxed border border-gray-800">
            {example.after.prompt}
          </div>
        </div>
      </div>
      {!shown ? (
        <button
          onClick={() => setShown(true)}
          className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-300 bg-gray-900 hover:bg-gray-800/60 transition-all border-t border-gray-800 font-medium"
        >
          Why does this matter? ↓
        </button>
      ) : (
        <div className="p-4 bg-gray-900 border-t border-gray-800 text-sm text-gray-400 leading-relaxed animate-fade-in">
          The "after" prompt gives AI context, scope, and intent — so it can tailor depth, vocabulary, and focus to exactly what you need. Specificity is the single biggest lever for better AI output.
        </div>
      )}
    </div>
  )
}
