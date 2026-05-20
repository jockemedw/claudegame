import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { levels } from '../data'
import { getAllProgress } from '../hooks/useProgress'

const ROMAN = [null, 'I', 'II', 'III', 'IV', 'V', 'VI']

export default function MyPages() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState({})

  useEffect(() => { setProgress(getAllProgress()) }, [])

  function getStatus(tipId) { return progress[tipId]?.status || 'none' }

  const toMaster = []
  const wantToLearn = []

  levels.forEach(level => {
    const unmastered = level.tips.filter(
      t => t.type === 'must_know' && getStatus(t.id) !== 'mastered'
    )
    if (unmastered.length > 0) toMaster.push({ level, tips: unmastered })

    const bookmarked = level.tips.filter(t => getStatus(t.id) === 'want_to_learn')
    if (bookmarked.length > 0) wantToLearn.push({ level, tips: bookmarked })
  })

  const allMustKnows = levels.flatMap(l => l.tips.filter(t => t.type === 'must_know'))
  const totalMastered = allMustKnows.filter(t => getStatus(t.id) === 'mastered').length
  const totalMustKnows = allMustKnows.length
  const pct = Math.round((totalMastered / totalMustKnows) * 100)

  const remaining = toMaster.reduce((acc, g) => acc + g.tips.length, 0)
  const bookmarkedCount = wantToLearn.reduce((acc, g) => acc + g.tips.length, 0)

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">My Pages</h1>
        <p className="text-gray-500 text-sm">Your personal learning dashboard.</p>
      </div>

      {/* Overall progress card */}
      <div className="card p-5 mb-8">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-sm font-medium text-gray-400 mb-0.5">Overall progress</div>
            <div className="text-2xl font-bold text-white">
              {totalMastered}
              <span className="text-gray-600 text-base font-normal">/{totalMustKnows}</span>
            </div>
            <div className="text-xs text-gray-600">must-knows mastered</div>
          </div>
          <div className="text-3xl font-bold" style={{
            background: 'linear-gradient(135deg, #22c55e, #3b82f6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {pct}%
          </div>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #22c55e, #3b82f6, #ec4899)'
            }}
          />
        </div>

        {/* Level breakdown */}
        <div className="mt-4 grid grid-cols-6 gap-1.5">
          {levels.map(level => {
            const mk = level.tips.filter(t => t.type === 'must_know')
            const done = mk.filter(t => getStatus(t.id) === 'mastered').length
            const pctLevel = mk.length === 0 ? 0 : (done / mk.length) * 100
            return (
              <button
                key={level.id}
                onClick={() => navigate(`/level/${level.id}`)}
                className="group"
                title={`Level ${ROMAN[level.id]}: ${level.title} — ${done}/${mk.length}`}
              >
                <div className="h-8 bg-gray-800 rounded overflow-hidden mb-1">
                  <div
                    className="w-full transition-all duration-700 rounded"
                    style={{ height: `${pctLevel}%`, backgroundColor: level.hex, marginTop: `${100 - pctLevel}%` }}
                  />
                </div>
                <div className="text-xs text-gray-700 group-hover:text-gray-500 text-center transition-colors">
                  {ROMAN[level.id]}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* To Master */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-semibold text-white">To Master</h2>
          {remaining > 0 ? (
            <span className="text-xs bg-amber-950 text-amber-400 px-2.5 py-0.5 rounded-full font-medium border border-amber-900/50">
              {remaining} remaining
            </span>
          ) : (
            <span className="text-xs bg-green-950 text-green-400 px-2.5 py-0.5 rounded-full font-medium border border-green-900/50">
              All done ✓
            </span>
          )}
        </div>
        {remaining === 0 ? (
          <div className="card p-6 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-gray-400 text-sm">All must-knows mastered. Impressive work.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {toMaster.map(({ level, tips }) => (
              <div key={level.id} className="card p-4">
                <button
                  onClick={() => navigate(`/level/${level.id}`)}
                  className="flex items-center gap-2.5 mb-3 hover:opacity-80 transition-opacity group"
                >
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ color: level.hex, backgroundColor: `${level.hex}18` }}
                  >
                    Level {ROMAN[level.id]}
                  </span>
                  <span className="text-sm font-medium text-white">{level.title}</span>
                  <span className="text-xs text-gray-700 group-hover:text-gray-500 transition-colors">→</span>
                </button>
                <div className="space-y-2">
                  {tips.map(tip => (
                    <div key={tip.id} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: level.hex + '80' }} />
                      <span className="text-sm text-gray-500 leading-snug">{tip.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Want to Learn */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-semibold text-white">Want to Learn</h2>
          {bookmarkedCount > 0 && (
            <span className="text-xs bg-blue-950 text-blue-400 px-2.5 py-0.5 rounded-full font-medium border border-blue-900/50">
              {bookmarkedCount} bookmarked
            </span>
          )}
        </div>
        {bookmarkedCount === 0 ? (
          <div className="card p-6 text-center">
            <p className="text-gray-600 text-sm">
              Nothing bookmarked yet. Open a level and mark tips as <span className="text-blue-500">Want to learn</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {wantToLearn.map(({ level, tips }) => (
              <div key={level.id} className="card p-4">
                <button
                  onClick={() => navigate(`/level/${level.id}`)}
                  className="flex items-center gap-2.5 mb-3 hover:opacity-80 transition-opacity group"
                >
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ color: level.hex, backgroundColor: `${level.hex}18` }}
                  >
                    Level {ROMAN[level.id]}
                  </span>
                  <span className="text-sm font-medium text-white">{level.title}</span>
                  <span className="text-xs text-gray-700 group-hover:text-gray-500 transition-colors">→</span>
                </button>
                <div className="space-y-2">
                  {tips.map(tip => (
                    <div key={tip.id} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-blue-500/60 shrink-0" />
                      <span className="text-sm text-gray-500 leading-snug">{tip.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
