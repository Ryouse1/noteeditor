// src/export/psych.ts
import { Chart } from "../core/model/Chart"

export function exportPsych(chart: Chart) {
  return {
    song: {
      bpm: chart.bpm,
      notes: chart.notes.map(n => ({
        strumTime: n.time * 1000,
        noteData: n.lane,
        sustainLength: n.duration * 1000
      }))
    }
  }
}
