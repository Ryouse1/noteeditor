// src/core/audio/AudioEngine.ts
import { Howl } from "howler"

export class AudioEngine {
  sound?: Howl

  load(file: File) {
    this.sound = new Howl({
      src: [URL.createObjectURL(file)],
      html5: true
    })
  }

  play() {
    this.sound?.play()
  }

  pause() {
    this.sound?.pause()
  }

  seek(): number {
    return (this.sound?.seek() as number) || 0
  }

  set(time: number) {
    this.sound?.seek(time)
  }
}
