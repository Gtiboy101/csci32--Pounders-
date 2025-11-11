'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { user, isHydrated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isHydrated) {
      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/welcome')
      }
    }
  }, [user, isHydrated, router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
