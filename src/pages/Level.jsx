import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getLevel } from '../data'
import TipCard from '../components/TipCard'
import ProgressBar from '../components/ProgressBar'
import { getStatus } from '../hooks/useProgress'

const ROMAN = [null, 'I', 'II', 'III', 'IV', 'V', 'VI']

export default function Level() {
  const { id } = useParams()
  const navigate = useNavigate()
  const level = getLevel(id)
  const [, forceUpdate] = useState(0)
  useEffect(() => { forceUpdate(n => n + 1) }, [])

  if (!level) {
    return (
      <div className="text-gray-500 text-center py-20">
        Level not found.{' '}
        <button onClick={() => navigate('/')} className="text-blue-400 hover:text-blue-300">Go home</button>
      </div>
    )
  }

  const mustKnows = level.tips.filter(t => t.type === 'must_know')
  const niceToHave = level.tips.filter(t => t.type === 'nice_to_have')
  const mastered = mustKnows.filter(t => getStatus(t.id) === 'mastered').length

  return (
    <div className="animate-fade-in">
      {/* Back */}
      <button
        onClick={() => navigate('/')}
        className="text-gray-600 hover:text-gray-300 text-sm mb-6 transition-colors flex items-center gap-1.5"
      >
        ← All levels
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg"
            style={{ color: level.hex, backgroundColor: `${level.hex}18` }}
          >
            Level {ROMAN[level.id]}
          </span>
          <span className="text-xs text-gray-600">{level.tips.length} tips total</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">{level.title}</h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed mb-6 text-sm">{level.description}</p>
        <ProgressBar value={mastered} max={mustKnows.length} color={level.hex} className="max-w-xs" />
      </div>

      {/* Must Know */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-semibold text-white">Must Know</h2>
          <span
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{ color: level.hex, backgroundColor: `${level.hex}18` }}
          >
            {mustKnows.length} tips
          </span>
          <span className="text-xs text-gray-700">— core competencies for this level</span>
        </div>
        <div className="space-y-2">
          {mustKnows.map(tip => (
            <TipCard key={tip.id} tip={tip} accentColor={level.hex} />
          ))}
        </div>
      </section>

      {/* Nice to Have */}
      {niceToHave.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-semibold text-white">Nice to Have</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-500 font-medium">
              {niceToHave.length} tips
            </span>
            <span className="text-xs text-gray-700">— go deeper at your own pace</span>
          </div>
          <div className="space-y-2">
            {niceToHave.map(tip => (
              <TipCard key={tip.id} tip={tip} accentColor={level.hex} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <div className="mt-12 pt-6 border-t border-gray-800 flex justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
        >
          ← Back to levels
        </button>
        {level.id < 6 && (
          <button
            onClick={() => navigate(`/level/${level.id + 1}`)}
            className="text-sm transition-colors font-medium"
            style={{ color: level.hex }}
          >
            Next level →
          </button>
        )}
      </div>
    </div>
  )
}
