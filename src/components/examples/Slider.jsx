import { useState } from 'react'

export default function Slider({ example }) {
  const [value, setValue] = useState(50)

  return (
    <div className="mt-4 rounded-lg border border-gray-800 overflow-hidden">
      <div className="p-4 bg-gray-900/50">
        <div className="text-xs text-gray-500 font-medium mb-3 tracking-wide">{example.label}</div>
        <input
          type="range" min={0} max={100} value={value}
          onChange={e => setValue(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>{example.leftLabel}</span>
          <span>{example.rightLabel}</span>
        </div>
      </div>
      <div className="p-4 bg-gray-900 border-t border-gray-800 min-h-[64px] flex items-center">
        {value < 35 && (
          <p className="text-sm text-gray-300 animate-fade-in leading-relaxed">{example.leftDesc}</p>
        )}
        {value >= 35 && value <= 65 && (
          <p className="text-sm text-gray-600 animate-fade-in leading-relaxed italic">
            Drag the slider to the left or right to see the tradeoff…
          </p>
        )}
        {value > 65 && (
          <p className="text-sm text-gray-300 animate-fade-in leading-relaxed">{example.rightDesc}</p>
        )}
      </div>
    </div>
  )
}
