'use client'

import MuxPlayer from '@mux/mux-player-react'

interface VideoPlayerProps {
  playbackId: string
  title?: string
  poster?: string
}

export default function VideoPlayer({ playbackId, title, poster }: VideoPlayerProps) {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <MuxPlayer
        playbackId={playbackId}
        metadata={{
          video_title: title || 'WatchHUE Video',
        }}
        streamType="on-demand"
        poster={poster}
        className="w-full h-full"
        autoPlay={false}
      />
    </div>
  )
}