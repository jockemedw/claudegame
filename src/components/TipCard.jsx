import { useState } from 'react'
import ExampleViewer from './ExampleViewer'
import { getStatus, setStatus, getStepsDone, setStepDone } from '../hooks/useProgress'

const STATUS_CONFIG = {
  none: { label: 'Mark progress', bg: 'bg-gray-800 hover:bg-gray-700', text: 'text-gray-400' },
  want_to_learn: { label: 'Want to learn', bg: 'bg-blue-950 hover:bg-blue-900', text: 'text-blue-400' },
  mastered: { label: 'Mastered ✓', bg: 'bg-green-950 hover:bg-green-900', text: 'text-green-400' },
}

export default function TipCard({ tip, accentColor }) {
  const [open, setOpen] = useState(false)
  const [status, setStatusState] = useState(() => getStatus(tip.id))
  const totalSteps = tip.steps?.length || 0
  const [stepsDone, setStepsDoneState] = useState(() =>
    totalSteps > 0 ? getStepsDone(tip.id, totalSteps) : []
  )

  const stepsCompleted = stepsDone.filter(Boolean).length

  function cycleStatus() {
    if (totalSteps > 0) {
      const next = status === 'none' ? 'want_to_learn' : 'none'
      setStatus(tip.id, next)
      setStatusState(next)
    } else {
      const next = status === 'none' ? 'want_to_learn' : status === 'want_to_learn' ? 'mastered' : 'none'
      setStatus(tip.id, next)
      setStatusState(next)
    }
  }

  function toggleStep(i) {
    const next = [...stepsDone]
    next[i] = !next[i]
    setStepDone(tip.id, i, next[i], totalSteps)
    setStepsDoneState(next)
    if (next.every(Boolean)) {
      setStatusState('mastered')
    } else if (status === 'mastered') {
      setStatus(tip.id, 'want_to_learn')
      setStatusState('want_to_learn')
    }
  }

  function resetStatus() {
    setStatus(tip.id, 'none')
    setStatusState('none')
  }

  const cfg = STATUS_CONFIG[status]
  const isMustKnow = tip.type === 'must_know'

  return (
    <div className={`card transition-all duration-200 ${open ? 'border-gray-700' : 'hover:border-gray-700/60'}`}>
      {/* Collapsed header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-3 p-4 text-left group"
      >
        {/* Status dot */}
        <div className="mt-0.5 shrink-0">
          <div
            className={`w-2 h-2 rounded-full mt-1 transition-colors duration-200 ${
              status === 'mastered' ? 'bg-green-500' :
              status === 'want_to_learn' ? 'bg-blue-500' :
              'bg-gray-700'
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {isMustKnow && (
              <span
                className="text-xs font-semibold px-1.5 py-0.5 rounded"
                style={{ color: accentColor, backgroundColor: `${accentColor}18` }}
              >
                Must know
              </span>
            )}
            {totalSteps > 0 && status !== 'mastered' && stepsCompleted > 0 && (
              <span className="text-xs text-gray-600">{stepsCompleted}/{totalSteps} steps</span>
            )}
            {status === 'mastered' && (
              <span className="text-xs text-green-500 font-medium">✓ Mastered</span>
            )}
            {status === 'want_to_learn' && (
              <span className="text-xs text-blue-500">Bookmarked</span>
            )}
          </div>
          <h3 className="font-medium text-white text-sm leading-snug">{tip.title}</h3>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{tip.summary}</p>
        </div>

        <div className="shrink-0 mt-1">
          <span className="text-gray-700 text-xs group-hover:text-gray-500 transition-colors">
            {open ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {/* Source attribution — outside the button to keep valid HTML */}
      {tip.source && (
        <div className="px-4 pb-3 -mt-2 pl-9">
          <a
            href={tip.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-400 transition-colors underline decoration-dotted underline-offset-2"
          >
            <span className="text-gray-700 no-underline">Källa:</span> {tip.source.name}
          </a>
        </div>
      )}

      {/* Expanded content */}
      {open && (
        <div className="border-t border-gray-800 animate-fade-in">
          {/* Steps */}
          {totalSteps > 0 && (
            <div className="p-4 pb-2">
              <div className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wider">Practice steps</div>
              <div className="space-y-3">
                {tip.steps.map((step, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group/step">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={stepsDone[i] || false}
                        onChange={() => toggleStep(i)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 transition-all duration-200 flex items-center justify-center
                        ${stepsDone[i]
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-600 group-hover/step:border-gray-400'
                        }`}>
                        {stepsDone[i] && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                            <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm leading-relaxed transition-colors duration-150 ${
                      stepsDone[i] ? 'line-through text-gray-600' : 'text-gray-300 group-hover/step:text-white'
                    }`}>
                      {step}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Interactive example */}
          {tip.example && (
            <div className="px-4 pb-2">
              <ExampleViewer example={tip.example} />
            </div>
          )}

          {/* Status toggle */}
          <div className="p-4 pt-3 flex items-center justify-end gap-2 border-t border-gray-800/60">
            <span className="text-xs text-gray-700 mr-1">Status</span>
            <button
              onClick={cycleStatus}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${cfg.bg} ${cfg.text}`}
            >
              {cfg.label}
            </button>
            {status !== 'none' && (
              <button
                onClick={resetStatus}
                className="text-xs text-gray-700 hover:text-gray-500 transition-colors px-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
