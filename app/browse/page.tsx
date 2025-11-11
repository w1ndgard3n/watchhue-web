'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/app/lib/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function BrowsePage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // Redirect to home if not logged in
        router.push('/')
      } else {
        setUser(currentUser)
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

  // Mock video data - we'll replace this with real data from Firestore later
  const featuredVideos = [
    { id: 1, title: 'Chaotic Good', category: 'Original Series', image: '/placeholder-1.jpg' },
    { id: 2, title: 'Rising Voices', category: 'Documentary', image: '/placeholder-2.jpg' },
    { id: 3, title: 'Cultural Roots', category: 'Documentary', image: '/placeholder-3.jpg' },
  ]

  const newReleases = [
    { id: 4, title: 'New Horizons', category: 'Drama', image: '/placeholder-4.jpg' },
    { id: 5, title: 'Lunar New Year Special', category: 'Event', image: '/placeholder-5.jpg' },
    { id: 6, title: 'Hidden Stories', category: 'Documentary', image: '/placeholder-6.jpg' },
    { id: 7, title: 'Night Market', category: 'Series', image: '/placeholder-7.jpg' },
  ]

  const dramaVideos = [
    { id: 8, title: 'Between Worlds', category: 'Drama', image: '/placeholder-8.jpg' },
    { id: 9, title: 'Family Ties', category: 'Drama', image: '/placeholder-9.jpg' },
    { id: 10, title: 'Generation Gap', category: 'Drama', image: '/placeholder-10.jpg' },
    { id: 11, title: 'City Lights', category: 'Drama', image: '/placeholder-11.jpg' },
  ]

  return (
    <div className="min-h-screen bg-hue-midnight">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-hue-midnight/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
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
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/browse" className="text-white font-semibold">Browse</a>
              <a href="/browse" className="text-gray-400 hover:text-white transition">My List</a>
              <a href="/browse" className="text-gray-400 hover:text-white transition">Live</a>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">{user?.email}</span>
            <button 
              onClick={() => signOut(auth)}
              className="px-4 py-2 border border-hue-fuchsia text-hue-fuchsia font-semibold rounded-lg hover:bg-hue-fuchsia hover:text-white transition text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-6 pb-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-hue-fuchsia/20 to-hue-blue/20 border border-hue-fuchsia/30">
            <div className="absolute inset-0 flex items-center px-12">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Welcome to Watch<span className="text-hue-fuchsia">HUE</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Discover stories that honor unique expressions
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-hue-fuchsia text-white font-semibold rounded-lg hover:opacity-90 transition">
                    ▶ Play Featured
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-hue-midnight transition">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Featured Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <div 
                  key={video.id}
                  className="group relative aspect-video bg-gradient-to-br from-hue-fuchsia/10 to-hue-blue/10 rounded-xl overflow-hidden border border-white/10 hover:border-hue-fuchsia transition cursor-pointer"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 mb-4 rounded-full bg-hue-fuchsia/20 flex items-center justify-center group-hover:scale-110 transition">
                      <span className="text-3xl">▶</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm">{video.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Releases */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">New Releases</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newReleases.map((video) => (
                <div 
                  key={video.id}
                  className="group relative aspect-[2/3] bg-gradient-to-br from-hue-lime/10 to-hue-gold/10 rounded-lg overflow-hidden border border-white/10 hover:border-hue-lime transition cursor-pointer"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 mb-3 rounded-full bg-hue-lime/20 flex items-center justify-center group-hover:scale-110 transition">
                      <span className="text-2xl">▶</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">{video.title}</h3>
                    <p className="text-gray-400 text-xs">{video.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Drama Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Drama</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dramaVideos.map((video) => (
                <div 
                  key={video.id}
                  className="group relative aspect-[2/3] bg-gradient-to-br from-hue-gold/10 to-hue-blue/10 rounded-lg overflow-hidden border border-white/10 hover:border-hue-gold transition cursor-pointer"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 mb-3 rounded-full bg-hue-gold/20 flex items-center justify-center group-hover:scale-110 transition">
                      <span className="text-2xl">▶</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">{video.title}</h3>
                    <p className="text-gray-400 text-xs">{video.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}