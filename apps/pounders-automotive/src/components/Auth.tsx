'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import { Button } from '@repo/ui/button'
import { Input } from '@repo/ui/input'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

type AuthFormInputs = {
  name?: string
  email: string
  password: string
}

export default function Auth() {
  const { signUp, signIn, signOut, isLoading, error, clearError } = useAuth()
  const [isSignUpMode, setIsSignUpMode] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>()

  const onSubmit = async (data: AuthFormInputs) => {
    if (isSignUpMode) {
      const result = await signUp(data)
      console.log('Signed up:', result)
    } else {
      const result = await signIn({ email: data.email, password: data.password })
      console.log('Signed in:', result)
    }
  }

  return (
    <div className="">
      {/* Header removed since it's now in the modal header */}

      {error && (
        <div className="mb-1 p-1 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
          {error}
          <button onClick={clearError} className="ml-1 text-red-500 hover:text-red-700">
            ×
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        {isSignUpMode && (
          <Input
            id="name"
            type="text"
            placeholder="Name"
            size={Size.SMALL}
            variant={Variant.PRIMARY}
            {...register('name')}
          />
        )}

        <Input
          id="email"
          type="email"
          placeholder="Email"
          size={Size.SMALL}
          variant={Variant.PRIMARY}
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="text-red-500 text-xs -mt-0.5">{errors.email.message}</p>}

        <Input
          id="password"
          type="password"
          placeholder="Password"
          size={Size.SMALL}
          variant={Variant.PRIMARY}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'At least 6 characters' },
          })}
        />
        {errors.password && <p className="text-red-500 text-xs -mt-0.5">{errors.password.message}</p>}

        <div className="w-full">
          <Button
            {...({ type: 'submit' } as { type: 'submit' })}
            size={Size.SMALL}
            variant={Variant.PRIMARY}
            className="w-full text-xs py-1"
          >
            {isLoading ? 'Loading...' : isSignUpMode ? 'Sign Up' : 'Sign In'}
          </Button>
        </div>
      </form>

      <div className="mt-1 text-center">
        <button
          type="button"
          onClick={() => setIsSignUpMode(!isSignUpMode)}
          className="text-blue-600 hover:text-blue-700 text-xs transition-colors"
        >
          {isSignUpMode ? 'Sign In' : 'Sign Up'}
        </button>
      </div>

      <div className="mt-0.5 text-center">
        <button type="button" onClick={signOut} className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  )
}
