'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function PostPage() {
  const params = useParams()
  const postId = params.id as string

  // Mockup post data based on the ID
  const getPostData = () => {
    switch (postId) {
      case '1':
        return {
          title: 'Welcome to Pounders Automotive Forum!',
          category: 'General Discussion',
          author: 'Admin',
          createdAt: '2 hours ago',
          content: `Welcome everyone to the Pounders Automotive Forum!

This is our community space where automotive enthusiasts, mechanics, car owners, and anyone interested in vehicles can come together to:

• Share experiences and knowledge
• Ask questions and get expert advice
• Discuss the latest automotive trends
• Help fellow community members
• Review products and services

Whether you're dealing with a tricky repair, looking for recommendations on parts, or just want to chat about cars, this is the place for you. Our community values respectful discussion, helpful advice, and sharing knowledge.

Feel free to introduce yourself and let us know what brings you to our community!`,
          isSticky: true,
          replies: [
            {
              author: 'CarLover2024',
              content: 'Thanks for setting this up! Excited to be part of the community.',
              createdAt: '1 hour ago',
            },
            {
              author: 'MechanicMike',
              content: 'Great to have a dedicated space for automotive discussions. Looking forward to helping out!',
              createdAt: '45 minutes ago',
            },
          ],
        }
      case '2':
        return {
          title: 'Best practices for oil change intervals?',
          category: 'Maintenance & Technical',
          author: 'CarEnthusiast123',
          createdAt: '5 hours ago',
          content: `I've been wondering about the optimal oil change schedule for my 2019 Honda Civic. The manual says 7,500 miles but I've heard conflicting advice from different sources.

Some people say 3,000 miles is still the gold standard, while others say modern synthetic oils can go 10,000 miles or more. I drive about 12,000 miles per year, mostly highway driving with occasional city driving.

What do you all think? What intervals do you follow for your vehicles?`,
          isSticky: false,
          replies: [
            {
              author: 'MechanicMike',
              content:
                'For a 2019 Civic with synthetic oil, 7,500 miles is perfectly fine. The 3,000-mile rule is outdated.',
              createdAt: '4 hours ago',
            },
            {
              author: 'HondaTech',
              content: 'I stick with manufacturer recommendations. Your manual knows your engine best.',
              createdAt: '3 hours ago',
            },
          ],
        }
      case '3':
        return {
          title: 'Tire recommendations for winter driving',
          category: 'Reviews & Recommendations',
          author: 'WinterDriver',
          createdAt: '1 day ago',
          content: `Looking for good winter tire recommendations for a 2020 Subaru Outback. Budget is around $800-1000 for a set of four.

I live in Minnesota so we get real winters with snow, ice, and temperatures down to -20°F. I need something that will handle well in snow but also won't be terrible on dry pavement.

Any suggestions? What has worked well for you in similar conditions?`,
          isSticky: false,
          replies: [
            {
              author: 'SnowPro',
              content: 'Michelin X-Ice Xi3 are excellent. A bit pricey but worth every penny.',
              createdAt: '20 hours ago',
            },
            {
              author: 'SubaruFan',
              content: 'I run Bridgestone Blizzak WS90s on my Outback. Great grip in snow and slush.',
              createdAt: '18 hours ago',
            },
          ],
        }
      default:
        return {
          title: 'Sample Forum Post',
          category: 'General Discussion',
          author: 'User',
          createdAt: '1 day ago',
          content: 'This is a sample forum post to demonstrate the layout.',
          isSticky: false,
          replies: [],
        }
    }
  }
  const post = getPostData()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/forum">
            <button className="bg-white text-black border-2 border-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              ← Back to Forum
            </button>
          </Link>
        </div>

        {/* Post Content */}
        <div className="bg-white border-2 border-black rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            {post.isSticky && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full border">📌 Sticky</span>
            )}
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full border">{post.category}</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>By {post.author}</span>
            <span>Posted {post.createdAt}</span>
          </div>

          <div className="prose max-w-none">
            <div className="text-gray-700 whitespace-pre-line">{post.content}</div>
          </div>
        </div>

        {/* Replies Section */}
        <div className="bg-white border-2 border-black rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Replies ({post.replies.length})</h2>

          {post.replies.length > 0 ? (
            <div className="space-y-4">
              {post.replies.map((reply, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="font-medium text-gray-700">{reply.author}</span>
                    <span>{reply.createdAt}</span>
                  </div>
                  <p className="text-gray-700">{reply.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No replies yet. Be the first to reply!</p>
          )}
        </div>

        {/* Reply Form Mockup */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add a Reply</h3>

          <div className="space-y-4">
            <textarea
              placeholder="Write your reply here..."
              rows={4}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none resize-vertical"
              disabled
            />

            <div className="flex justify-end gap-4">
              <button
                disabled
                className="px-6 py-3 border-2 border-black rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
              >
                Post Reply (Coming Soon)
              </button>
            </div>
          </div>

          {/* Development Notice */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚧</span>
              <div>
                <h4 className="font-medium text-yellow-800">Reply Functionality Under Development</h4>
                <p className="text-sm text-yellow-700">
                  The reply system is being built. Soon you'll be able to respond to posts and engage with the
                  community!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
