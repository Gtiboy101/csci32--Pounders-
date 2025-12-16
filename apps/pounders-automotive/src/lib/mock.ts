export const MOCK_MODE =
  process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL?.includes('production')

// Mock responses for testing without backend
export const mockGraphQLResponse = (query: string, variables: any) => {
  if (query.includes('signUp')) {
    const { input } = variables
    return Promise.resolve({
      signUp: {
        token: `mock_token_${Date.now()}`,
        user_id: `user_${Date.now()}`,
        name: input.name || 'Test User',
        email: input.email,
      },
    })
  } else if (query.includes('signIn')) {
    const { input } = variables
    return Promise.resolve({
      signIn: {
        token: `mock_token_${Date.now()}`,
        user_id: `user_${Date.now()}`,
        name: 'Existing User',
        email: input.email,
      },
    })
  } else if (query.includes('forumCategories') || query.includes('GetForumCategories')) {
    return Promise.resolve({
      forumCategories: ['General Discussion', 'Technical Support', 'Feature Requests', 'Announcements', 'Off Topic'],
    })
  } else if (query.includes('forumPosts') || query.includes('GetForumPosts')) {
    const mockPosts = [
      {
        post_id: '1',
        title: 'Welcome to the Forum!',
        content: 'This is a sample post to demonstrate the forum functionality.',
        category: variables?.category || 'General Discussion',
        isSticky: true,
        isLocked: false,
        createdAt: '2024-12-15T10:00:00Z',
        updatedAt: '2024-12-15T10:00:00Z',
        author: {
          user_id: 'user1',
          name: 'Forum Admin',
          email: 'admin@example.com',
        },
        replies: [
          {
            reply_id: '1',
            content: 'Thanks for the welcome!',
            createdAt: '2024-12-15T11:00:00Z',
            author: {
              user_id: 'user2',
              name: 'Test User',
            },
          },
        ],
      },
      {
        post_id: '2',
        title: 'How to use the forum?',
        content: 'Here are some tips for using the forum effectively...',
        category: variables?.category || 'Technical Support',
        isSticky: false,
        isLocked: false,
        createdAt: '2024-12-15T09:00:00Z',
        updatedAt: '2024-12-15T09:00:00Z',
        author: {
          user_id: 'user3',
          name: 'Helper',
          email: 'helper@example.com',
        },
        replies: [],
      },
    ]

    return Promise.resolve({
      forumPosts: variables?.category ? mockPosts.filter((post) => post.category === variables.category) : mockPosts,
    })
  } else if (query.includes('forumPost') || query.includes('GetForumPost')) {
    const { postId } = variables
    return Promise.resolve({
      forumPost: {
        post_id: postId || '1',
        title: 'Sample Post Title',
        content: 'This is the content of the post...',
        category: 'General Discussion',
        isSticky: false,
        isLocked: false,
        createdAt: '2024-12-15T10:00:00Z',
        updatedAt: '2024-12-15T10:00:00Z',
        author: {
          user_id: 'user1',
          name: 'Post Author',
          email: 'author@example.com',
        },
        replies: [
          {
            reply_id: '1',
            content: 'Great post!',
            createdAt: '2024-12-15T11:00:00Z',
            author: {
              user_id: 'user2',
              name: 'Commenter',
            },
          },
        ],
      },
    })
  }

  return Promise.reject(new Error('Unknown query'))
}
