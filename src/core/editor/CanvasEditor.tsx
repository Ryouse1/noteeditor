// src/editor/CanvasEditor.tsx
import { useRef, useEffect } from "react"
import { Note } from "../core/model/Note"
import { drawGrid } from "../core/timeline/Grid"

interface Props {
  notes: Note[]
  bpm: number
}

export default function CanvasEditor({ notes, bpm }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const pps = 120

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGrid(ctx, canvas.width, canvas.height, bpm, pps)

    for (const n of notes) {
      const y = n.time * pps
      ctx.fillStyle = n.color
      ctx.fillRect(n.lane * 80 + 10, y, 60, Math.max(12, n.duration * pps))
    }
  })

  return <canvas ref={ref} />
}
