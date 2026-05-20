import { useState, useEffect } from 'react'
import { levels } from '../data'
import LevelCard from '../components/LevelCard'
import { getAllProgress } from '../hooks/useProgress'

export default function Home() {
  const [, forceUpdate] = useState(0)
  useEffect(() => { forceUpdate(n => n + 1) }, [])

  const progress = getAllProgress()
  const totalMustKnows = levels.flatMap(l => l.tips.filter(t => t.type === 'must_know')).length
  const totalMastered = Object.values(progress).filter(p => p.status === 'mastered').length

  return (
    <div>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
          Master Claude AI
        </h1>
        <p className="text-gray-400 max-w-xl leading-relaxed mb-6">
          Six levels from first question to full orchestration. Work through each at your own pace — mark what you want to learn, track what you've mastered.
        </p>

        {/* Overall mini-progress */}
        {totalMastered > 0 && (
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 animate-fade-in">
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">{totalMastered}</span> of {totalMustKnows} must-knows mastered
            </div>
            <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 transition-all duration-700"
                style={{ width: `${(totalMastered / totalMustKnows) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Level grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {levels.map((level, i) => (
          <div
            key={level.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fade-in"
          >
            <LevelCard level={level} />
          </div>
        ))}
      </div>
    </div>
  )
}
