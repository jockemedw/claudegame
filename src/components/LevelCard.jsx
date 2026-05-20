import { useNavigate } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import { getStatus } from '../hooks/useProgress'

const ROMAN = [null, 'I', 'II', 'III', 'IV', 'V', 'VI']

export default function LevelCard({ level }) {
  const navigate = useNavigate()
  const mustKnows = level.tips.filter(t => t.type === 'must_know')
  const mastered = mustKnows.filter(t => getStatus(t.id) === 'mastered').length
  const total = level.tips.length

  return (
    <button
      onClick={() => navigate(`/level/${level.id}`)}
      className="card p-6 text-left hover:border-gray-700 hover:bg-gray-800/30 transition-all duration-200 group w-full animate-fade-in"
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded"
          style={{ color: level.hex, backgroundColor: `${level.hex}18` }}
        >
          Level {ROMAN[level.id]}
        </span>
        <span
          className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-medium"
        >
          {total} tips →
        </span>
      </div>
      <h2 className="text-xl font-semibold text-white mb-1">{level.title}</h2>
      <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-2">{level.tagline}</p>
      <ProgressBar value={mastered} max={mustKnows.length} color={level.hex} />
    </button>
  )
}
