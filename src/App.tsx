import { useState } from "react"
import CanvasEditor from "./editor/CanvasEditor"
import { Note } from "./core/model/Note"

export default function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const bpm = 120

  return (
    <CanvasEditor
      notes={notes}
      setNotes={setNotes}
      bpm={bpm}
    />
  )
}
