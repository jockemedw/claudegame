export default function ProgressBar({ value, max, color = '#22c55e', className = '' }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs text-gray-500 mb-1.5">
        <span>Must knows</span>
        <span className="font-medium" style={{ color: pct === 100 ? color : undefined }}>
          {value}/{max}{pct === 100 ? ' ✓' : ''}
        </span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
