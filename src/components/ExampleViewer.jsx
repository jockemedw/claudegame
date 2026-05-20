import BeforeAfter from './examples/BeforeAfter'
import Reveal from './examples/Reveal'
import Slider from './examples/Slider'

export default function ExampleViewer({ example }) {
  if (!example) return null
  if (example.type === 'before_after') return <BeforeAfter example={example} />
  if (example.type === 'reveal') return <Reveal example={example} />
  if (example.type === 'slider') return <Slider example={example} />
  return null
}
