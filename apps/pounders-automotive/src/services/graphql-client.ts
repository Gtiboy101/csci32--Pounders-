import { GraphQLClient } from 'graphql-request'
import { MOCK_MODE, mockGraphQLResponse } from '../lib/mock'

const GRAPHQL_API_URL = '/api/graphql'

// Create singleton GraphQL client
const originalClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}${GRAPHQL_API_URL}`)

// Enhanced client wrapper that falls back to mock when backend is unavailable
export const gqlClient = {
  setHeader: originalClient.setHeader.bind(originalClient),

  async request(query: string, variables?: any) {
    try {
      // Try real backend first
      return await originalClient.request(query, variables)
    } catch (error) {
      // If in development and backend fails, use mock
      if (MOCK_MODE) {
        console.warn('Backend unavailable, using mock response for:', query.substring(0, 50) + '...')
        return await mockGraphQLResponse(query, variables)
      }
      // Re-throw error if not in mock mode
      throw error
    }
  },
}

// Auth helper functions
export function setAuthToken(token: string) {
  gqlClient.setHeader('Authorization', `Bearer ${token}`)
  // Store in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token)
  }
}

export function clearAuthToken() {
  gqlClient.setHeader('Authorization', '')
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken')
  }
}

export function initializeAuth() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken')
    if (token) {
      gqlClient.setHeader('Authorization', `Bearer ${token}`)
    }
  }
}

// Initialize auth on module load
initializeAuth()
