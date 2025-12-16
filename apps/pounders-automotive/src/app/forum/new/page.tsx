'use client'

import Link from 'next/link'

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-blue-200 border-3 border-black p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Post</h1>
            <p className="text-gray-600">Share your thoughts with the community</p>
          </div>
          <Link href="/forum">
            <button className="bg-white text-black border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              ← Back to Forum
            </button>
          </Link>
        </div>

        {/* Create Post Form Mockup */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <div className="space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                disabled
              >
                <option>General Discussion</option>
                <option>Maintenance & Technical</option>
                <option>Reviews & Recommendations</option>
                <option>Buying & Selling</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter a descriptive title for your post..."
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                disabled
              />
              <p className="text-sm text-gray-500 mt-1">0/200 characters</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                placeholder="Write your post content here. Be clear, helpful, and respectful to other community members..."
                rows={12}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none resize-vertical"
                disabled
              />
              <p className="text-sm text-gray-500 mt-1">0/5000 characters</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Link href="/forum">
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
              </Link>
              <button
                disabled
                className="px-6 py-3 border-2 border-black rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
              >
                Create Post (Coming Soon)
              </button>
            </div>
          </div>
        </div>

        {/* Development Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mt-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Post Creation Under Development</h3>
            <p className="text-sm text-yellow-700 mb-4">
              The post creation functionality is currently being developed. This form shows the planned layout and design.
            </p>
            <p className="text-sm text-yellow-700">
              Soon you'll be able to create posts, add content, select categories, and interact with the community!
            </p>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Community Guidelines (Preview)</h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>• Be respectful and helpful to other members</li>
            <li>• Search for existing posts before creating a new one</li>
            <li>• Use clear, descriptive titles</li>
            <li>• Stay on topic for the selected category</li>
            <li>• Include relevant details when asking for help</li>
            <li>• No spam, self-promotion, or off-topic content</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
        </div>

        {/* Create Post Form */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-100 border-2 border-red-300 text-red-700 p-4 rounded-md">{error}</div>}

            {/* Category Selection */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                required
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a descriptive title for your post..."
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                required
                maxLength={200}
              />
              <p className="text-sm text-gray-500 mt-1">{title.length}/200 characters</p>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here. Be clear, helpful, and respectful to other community members..."
                rows={12}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none resize-vertical"
                required
                maxLength={5000}
              />
              <p className="text-sm text-gray-500 mt-1">{content.length}/5000 characters</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Link href="/forum">
                <button
                  type="button"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                disabled={loading || !title.trim() || !content.trim()}
                className={`px-6 py-3 border-2 border-black rounded-md transition-colors ${
                  loading || !title.trim() || !content.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {loading ? 'Creating...' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>

        {/* Posting Guidelines */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Community Guidelines</h3>
          <ul className="text-sm text-yellow-700 space-y-2">
            <li>• Be respectful and helpful to other members</li>
            <li>• Search for existing posts before creating a new one</li>
            <li>• Use clear, descriptive titles</li>
            <li>• Stay on topic for the selected category</li>
            <li>• Include relevant details when asking for help</li>
            <li>• No spam, self-promotion, or off-topic content</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
