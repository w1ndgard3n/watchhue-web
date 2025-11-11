'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { auth } from '@/app/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import VideoPlayer from '@/app/components/VideoPlayer'
import Link from 'next/link'
import Image from 'next/image'

export default function VideoPage() {
  const params = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/')
      } else {
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-hue-midnight flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // For now, we'll hardcode the test video
  // Later, we'll fetch this from Firestore based on params.id
  const testVideo = {
    id: 'test-video',
    title: 'Test Video - Mountain Scenery',
    playbackId: 'Jw2nxab5XzTwZSyJzixrsO37Y8RzyLWN3VsOHtvUyg4',
    description: 'A beautiful mountain and castle scenery video to test our Mux video player integration.',
    category: 'Demo',
    duration: '1:33',
  }

  return (
    <div className="min-h-screen bg-hue-midnight">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-hue-midnight/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/browse" className="flex items-center gap-3">
              <Image 
                src="/HUE-logo.png" 
                alt="HUE Logo" 
                width={40}
                height={40}
                unoptimized
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">
                Watch<span className="text-hue-fuchsia">HUE</span>
              </span>
            </Link>
          </div>

          <Link 
            href="/browse" 
            className="text-white hover:text-hue-fuchsia transition flex items-center gap-2"
          >
            ← Back to Browse
          </Link>
        </div>
      </nav>

      {/* Video Content */}
      <div className="pt-20 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Video Player */}
          <div className="mb-8">
            <VideoPlayer 
              playbackId={testVideo.playbackId}
              title={testVideo.title}
            />
          </div>

          {/* Video Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {testVideo.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span>{testVideo.duration}</span>
                <span>•</span>
                <span>{testVideo.category}</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {testVideo.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-hue-fuchsia text-white font-semibold rounded-lg hover:opacity-90 transition">
                Add to My List
              </button>
              <button className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-hue-fuchsia hover:text-hue-fuchsia transition">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}