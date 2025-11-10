'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="min-h-screen bg-hue-midnight">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-hue-midnight/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image 
              src="/HUE-logo.png" 
              alt="HUE Logo" 
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white">
              Watch<span className="text-hue-fuchsia">HUE</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-hue-fuchsia transition">Home</a>
            <a href="#featured" className="text-white hover:text-hue-fuchsia transition">Featured</a>
            <a href="#categories" className="text-white hover:text-hue-lime transition">Categories</a>
            <a href="#about" className="text-white hover:text-hue-gold transition">About</a>
          </div>

          {/* Sign In Button */}
          <button className="px-6 py-2 bg-hue-fuchsia text-white font-semibold rounded-lg hover:opacity-90 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="mb-8 flex flex-col items-center animate-fade-in">
          <Image 
            src="/HUE-logo.png" 
            alt="HUE Logo" 
            width={160}
            height={160}
            className="h-32 md:h-40 mb-6 w-auto"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            Watch<span className="text-hue-fuchsia">HUE</span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-4xl text-white font-light text-center mb-4">
          Honoring Unique Expressions
        </h2>

        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
          A New Era of Asian-American Media
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-hue-fuchsia text-white font-semibold rounded-lg hover:opacity-90 transition">
            Coming Soon
          </button>
          <button 
            onClick={() => setShowModal(true)}
            className="px-8 py-3 border-2 border-hue-gold text-hue-gold font-semibold rounded-lg hover:bg-hue-gold hover:text-hue-midnight transition"
          >
            Learn More
          </button>
        </div>

        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-hue-lime opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 rounded-full bg-hue-gold opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-hue-blue opacity-40"></div>
      </div>

      {/* Featured Content Section */}
      <section id="featured" className="py-20 px-6 bg-gradient-to-b from-hue-midnight to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Featured <span className="text-hue-fuchsia">Content</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Original stories that amplify underrepresented voices
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured Item 1 */}
            <div className="group relative aspect-video bg-gradient-to-br from-hue-fuchsia/20 to-hue-blue/20 rounded-xl overflow-hidden border border-hue-fuchsia/30 hover:border-hue-fuchsia transition cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-hue-fuchsia/20 flex items-center justify-center">
                    <span className="text-3xl">🎬</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Original Films</h3>
                  <p className="text-gray-300 text-sm">Exclusive feature films</p>
                </div>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="group relative aspect-video bg-gradient-to-br from-hue-lime/20 to-hue-gold/20 rounded-xl overflow-hidden border border-hue-lime/30 hover:border-hue-lime transition cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-hue-lime/20 flex items-center justify-center">
                    <span className="text-3xl">📺</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Series</h3>
                  <p className="text-gray-300 text-sm">Binge-worthy originals</p>
                </div>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="group relative aspect-video bg-gradient-to-br from-hue-gold/20 to-hue-blue/20 rounded-xl overflow-hidden border border-hue-gold/30 hover:border-hue-gold transition cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-hue-gold/20 flex items-center justify-center">
                    <span className="text-3xl">🎤</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Documentaries</h3>
                  <p className="text-gray-300 text-sm">Real stories, real impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Explore <span className="text-hue-lime">Categories</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Discover content across diverse genres and formats
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-6 bg-hue-midnight border border-hue-fuchsia/30 rounded-xl hover:border-hue-fuchsia transition cursor-pointer">
              <h3 className="text-hue-fuchsia font-bold text-lg mb-2">Drama</h3>
              <p className="text-gray-400 text-sm">Powerful narratives</p>
            </div>

            <div className="p-6 bg-hue-midnight border border-hue-lime/30 rounded-xl hover:border-hue-lime transition cursor-pointer">
              <h3 className="text-hue-lime font-bold text-lg mb-2">Comedy</h3>
              <p className="text-gray-400 text-sm">Laughter and joy</p>
            </div>

            <div className="p-6 bg-hue-midnight border border-hue-gold/30 rounded-xl hover:border-hue-gold transition cursor-pointer">
              <h3 className="text-hue-gold font-bold text-lg mb-2">Culture</h3>
              <p className="text-gray-400 text-sm">Heritage and traditions</p>
            </div>

            <div className="p-6 bg-hue-midnight border border-hue-blue/30 rounded-xl hover:border-hue-blue transition cursor-pointer">
              <h3 className="text-hue-blue font-bold text-lg mb-2">Music</h3>
              <p className="text-gray-400 text-sm">Performances and concerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-hue-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <Image 
            src="/HUE-logo.png" 
            alt="HUE Logo" 
            width={96}
            height={96}
            className="h-24 w-auto mx-auto mb-8"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Honoring <span className="text-hue-gold">Unique</span> Expressions
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            WatchHUE is more than a streaming platform - it is a movement to amplify voices that have been underrepresented in mainstream media. We celebrate the rich diversity of Asian-American storytelling, providing a home for creators and audiences who crave authentic, meaningful content.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-12 h-12 rounded-full bg-hue-fuchsia/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-white font-bold mb-2">Community First</h3>
              <p className="text-gray-400 text-sm">Built by and for our community</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-hue-lime/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-white font-bold mb-2">Creator Focused</h3>
              <p className="text-gray-400 text-sm">Empowering storytellers</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-hue-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-white font-bold mb-2">Quality Content</h3>
              <p className="text-gray-400 text-sm">Curated with care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-hue-midnight border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 HUE Media LLC. All rights reserved.</p>
          <p className="mt-2">Honoring Unique Expressions</p>
        </div>
      </footer>

      {/* Learn More Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-hue-midnight border-2 border-hue-fuchsia rounded-2xl p-8 max-w-2xl mx-4 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-hue-fuchsia text-2xl font-bold"
            >
              ×
            </button>

            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/HUE-logo.png" 
                alt="HUE Logo" 
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <h2 className="text-4xl font-bold text-white">
                About Watch<span className="text-hue-fuchsia">HUE</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              WatchHUE is a groundbreaking streaming platform dedicated to amplifying underrepresented voices and celebrating the rich diversity of Asian-American storytelling.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-hue-fuchsia mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Original Content</h3>
                  <p className="text-gray-400">Exclusive films, documentaries, and series that honor unique expressions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-hue-lime mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Live Events</h3>
                  <p className="text-gray-400">Stream cultural celebrations, performances, and community gatherings</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-hue-gold mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Community Driven</h3>
                  <p className="text-gray-400">Supporting creators and filmmakers from marginalized communities</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full px-8 py-3 bg-hue-fuchsia text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}