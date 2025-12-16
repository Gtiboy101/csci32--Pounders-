'use client'

import Link from 'next/link'

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="relative bg-linear-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h1 className="text-4xl font-bold">Community Forum</h1>
              </div>
              <p className="text-blue-100 text-lg">Connect, share, and learn with fellow automotive enthusiasts</p>
              <div className="flex gap-6 mt-4 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>3 Active Posts
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  25 Total Replies
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/welcome">
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium">
                  ← Home
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Example Notice - Prominently displayed at top */}
        <div className="bg-linear-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">Example Forum - Demo Only</h2>
              <p className="text-yellow-700 leading-relaxed mb-3">
                This is a demonstration of what the forum could look like. The posts shown below are examples only to
                showcase the design and potential functionality.
              </p>
              <p className="text-yellow-600 text-sm font-medium">
                🚧 Forum functionality is not yet implemented - this is a visual preview only
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-lg">📝</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm text-blue-700 font-medium">Active Posts</div>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-linear-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">
                  25
                </div>
                <div className="text-sm text-green-700 font-medium">Total Replies</div>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-purple-50 to-violet-100 rounded-xl p-4 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-violet-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-lg">👥</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-linear-to-r from-purple-600 to-violet-800 bg-clip-text text-transparent">
                  8
                </div>
                <div className="text-sm text-purple-700 font-medium">Contributors</div>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-orange-50 to-amber-100 rounded-xl p-4 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-lg">🏷️</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-linear-to-r from-orange-600 to-amber-800 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-sm text-orange-700 font-medium">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Forum Categories */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 mb-8 shadow-xl">
          <h2 className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
            <span className="text-2xl">🏷️</span>
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400">
              All Categories
            </button>
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-emerald-50 to-green-100 text-emerald-700 border border-emerald-200 hover:from-emerald-100 hover:to-green-200 hover:border-emerald-300 transition-all duration-300 font-medium hover:scale-105 shadow-md">
              💬 General Discussion
            </button>
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-orange-50 to-amber-100 text-orange-700 border border-orange-200 hover:from-orange-100 hover:to-amber-200 hover:border-orange-300 transition-all duration-300 font-medium hover:scale-105 shadow-md">
              🔧 Maintenance & Technical
            </button>
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-50 to-violet-100 text-purple-700 border border-purple-200 hover:from-purple-100 hover:to-violet-200 hover:border-purple-300 transition-all duration-300 font-medium hover:scale-105 shadow-md">
              ⭐ Reviews & Recommendations
            </button>
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-yellow-50 to-orange-100 text-yellow-700 border border-yellow-200 hover:from-yellow-100 hover:to-orange-200 hover:border-yellow-300 transition-all duration-300 font-medium hover:scale-105 shadow-md">
              💰 Buying & Selling
            </button>
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-6">
          {/* Sample Post 1 - Featured Sticky */}
          <div className="bg-linear-to-br from-yellow-50 via-orange-50 to-amber-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-yellow-200/40 to-orange-200/40 rounded-full -mr-12 -mt-12"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-amber-200/30 to-yellow-200/30 rounded-full -ml-8 -mb-8"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-linear-to-r from-orange-500 to-red-500 text-white text-xs px-4 py-2 rounded-full font-medium shadow-lg flex items-center gap-1 border border-orange-400">
                  📌 Featured
                </span>
                <span className="bg-linear-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs px-4 py-2 rounded-full font-medium border border-blue-300">
                  💬 General Discussion
                </span>
              </div>

              <Link href="/forum/post/1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                  Welcome to Pounders Automotive Forum! 🎉
                </h3>
              </Link>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome everyone! This is where we'll discuss all things automotive. Feel free to share your
                experiences, ask questions, and help fellow enthusiasts build the ultimate driving experience...
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      A
                    </div>
                    <span className="font-medium">Admin</span>
                  </div>
                  <span className="flex items-center gap-1">
                    <span className="text-xs">🕒</span>2 hours ago
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                    <span className="text-green-600">💬</span>5 replies
                  </span>
                  <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                    <span className="text-blue-600">👁️</span>
                    127 views
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Post 2 */}
          <div className="bg-linear-to-br from-white to-blue-50/50 border-2 border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/30 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                CE
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-linear-to-r from-orange-100 to-amber-100 text-orange-800 text-xs px-4 py-2 rounded-full font-medium border border-orange-300 shadow-sm">
                    🔧 Maintenance & Technical
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 font-medium">5 hours ago</span>
                </div>

                <Link href="/forum/post/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                    Best practices for oil change intervals? 🛠️
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  I've been wondering about the optimal oil change schedule for my 2019 Honda Civic. The manual says
                  7,500 miles but I've heard conflicting advice from different mechanics...
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">CarEnthusiast123</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                      <span className="text-green-600">💬</span>
                      12 replies
                    </span>
                    <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                      <span className="text-blue-600">👁️</span>
                      89 views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Post 3 */}
          <div className="bg-linear-to-br from-white to-purple-50/50 border-2 border-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100/30 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 bg-linear-to-br from-pink-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                WD
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-linear-to-r from-purple-100 to-violet-100 text-purple-800 text-xs px-4 py-2 rounded-full font-medium border border-purple-300 shadow-sm">
                    ⭐ Reviews & Recommendations
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 font-medium">1 day ago</span>
                </div>

                <Link href="/forum/post/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                    Tire recommendations for winter driving ❄️
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Looking for good winter tire recommendations for a 2020 Subaru Outback. Budget is around $800-1000 for
                  a set of four. Minnesota winters can be brutal! Any suggestions?
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">WinterDriver</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                      <span className="text-green-600">💬</span>8 replies
                    </span>
                    <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                      <span className="text-blue-600">👁️</span>
                      64 views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-linear-to-br from-indigo-50 via-blue-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-linear-to-r from-blue-100/30 to-purple-100/30"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/20 rounded-full -ml-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-200/20 rounded-full -mr-12 -mb-12"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Forum Under Development
              </h3>
              <p className="text-indigo-700 max-w-2xl mx-auto leading-relaxed mb-6 text-lg">
                We're building an amazing community platform! These are sample posts to showcase the design. Soon you'll
                be able to create posts, reply to discussions, and connect with automotive enthusiasts worldwide.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm bg-white/50 px-4 py-2 rounded-full border border-indigo-200">
                  <div className="w-3 h-3 bg-linear-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-indigo-700 font-medium">Real-time discussions</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/50 px-4 py-2 rounded-full border border-blue-200">
                  <div className="w-3 h-3 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 font-medium">Expert advice</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/50 px-4 py-2 rounded-full border border-purple-200">
                  <div className="w-3 h-3 bg-linear-to-r from-purple-400 to-violet-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 font-medium">Community support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
