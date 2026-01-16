// src/core/timeline/Grid.ts
export function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  bpm: number,
  pps: number
) {
  const beat = 60 / bpm
  ctx.strokeStyle = "#333"

  for (let t = 0; t < height / pps; t += beat) {
    const y = t * pps
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}
