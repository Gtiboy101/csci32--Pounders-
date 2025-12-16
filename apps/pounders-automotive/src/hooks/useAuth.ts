import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { gqlClient, setAuthToken, clearAuthToken } from '../services/graphql-client'
import { graphql } from '../generated/gql'
import type { SignUpInput, SignInInput, AuthPayload, UserDto } from '../generated/graphql'
import { ClientError } from 'graphql-request'

// Define the mutations using codegen graphql function
const SIGN_UP_MUTATION = graphql(`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user_id
      name
      email
    }
  }
`)

const SIGN_IN_MUTATION = graphql(`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user_id
      name
      email
    }
  }
`)

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<UserDto | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const router = useRouter()

  // Handle hydration and initialize user from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('authUser')
      if (storedUser && storedUser.trim() !== '') {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      }
    } catch (error) {
      // Clear invalid data from localStorage
      localStorage.removeItem('authUser')
      console.warn('Invalid auth data in localStorage, clearing it')
    }
    setIsHydrated(true)
  }, [])

  // Helper function to extract user-friendly error message from GraphQL errors
  const extractErrorMessage = (err: unknown, fallback: string): string => {
    if (err instanceof ClientError) {
      return err.response?.errors?.[0]?.message || fallback
    }
    return fallback
  }

  const signUp = async (input: SignUpInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await gqlClient.request(SIGN_UP_MUTATION, { input })

      if (result.signUp) {
        // Set auth token for future requests
        setAuthToken(result.signUp.token)

        // Create user object from the response
        const userData = {
          user_id: result.signUp.user_id,
          name: result.signUp.name,
          email: result.signUp.email,
        }

        // Store user data
        setUser(userData)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(userData))
        }

        // Redirect to dashboard after successful sign up
        router.push('/dashboard')

        return result.signUp
      }

      return null
    } catch (err) {
      const errorMessage = extractErrorMessage(err, 'Sign up failed')
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (input: SignInInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const result = await gqlClient.request(SIGN_IN_MUTATION, { input })

      if (result.signIn) {
        // Set auth token for future requests
        setAuthToken(result.signIn.token)

        // Create user object from the response
        const userData = {
          user_id: result.signIn.user_id,
          name: result.signIn.name,
          email: result.signIn.email,
        }

        // Store user data
        setUser(userData)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(userData))
        }

        // Redirect to dashboard after successful sign in
        router.push('/dashboard')

        return result.signIn
      }

      return null
    } catch (err) {
      const errorMessage = extractErrorMessage(err, 'Sign in failed')
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    // Clear auth token and localStorage
    clearAuthToken()
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authUser')
    }
    setError(null)
  }

  const clearError = () => {
    setError(null)
  }

  return {
    isLoading,
    error,
    user,
    isHydrated,
    signUp,
    signIn,
    signOut,
    clearError,
  }
}
