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
  }

  return Promise.reject(new Error('Unknown query'))
}
