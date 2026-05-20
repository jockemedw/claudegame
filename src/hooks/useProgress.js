const KEY = 'claude-guide-progress'

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function getStatus(tipId) {
  return load()[tipId]?.status || 'none'
}

export function setStatus(tipId, status) {
  const data = load()
  data[tipId] = { ...data[tipId], status }
  save(data)
}

export function getStepsDone(tipId, totalSteps) {
  const steps = load()[tipId]?.steps
  if (!steps) return new Array(totalSteps).fill(false)
  return steps
}

export function setStepDone(tipId, stepIndex, done, totalSteps) {
  const data = load()
  const steps = data[tipId]?.steps || new Array(totalSteps).fill(false)
  steps[stepIndex] = done
  const allDone = steps.every(Boolean)
  data[tipId] = { ...data[tipId], steps, status: allDone ? 'mastered' : data[tipId]?.status || 'none' }
  save(data)
}

export function getAllProgress() {
  return load()
}

export function clearAll() {
  localStorage.removeItem(KEY)
}
