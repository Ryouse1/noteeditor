// src/core/model/Note.ts
export type NoteType = "tap" | "hold" | "custom"

export interface Note {
  id: string
  time: number
  lane: number
  duration: number
  type: NoteType
  color: string
}
