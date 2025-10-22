'use client'

import { useState } from 'react'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { Input } from '@repo/ui/input'
import { Button } from '@repo/ui/button'

export default function InputPage() {
  const [userNameValue, setUserNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleUserNameAlert = () => {
    alert(`Username: ${userNameValue}`)
  }

  const handleEmailAlert = () => {
    alert(`Email: ${emailValue}`)
  }

  const handlePasswordAlert = () => {
    alert(`Password: ${passwordValue}`)
  }

  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold mb-8">Pounders Automotive Registration</h1>

      {/* Wrapper div with flex, gap, and flex-wrap for responsive layout */}
      <div className="flex gap-6 flex-wrap">
        {/* Group 1: Username Input + Button */}
        <div className="flex gap-3">
          <Input
            name="username"
            id="username"
            placeholder="Enter your username"
            value={userNameValue}
            setValue={setUserNameValue}
            size={Size.MEDIUM}
            variant={Variant.PRIMARY}
          />
          <Button onClick={handleUserNameAlert} variant={Variant.PRIMARY} size={Size.MEDIUM}>
            Check Username
          </Button>
        </div>

        {/* Group 2: Email Input + Button */}
        <div className="flex gap-3">
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            setValue={setEmailValue}
            size={Size.MEDIUM}
            variant={Variant.SECONDARY}
          />
          <Button onClick={handleEmailAlert} variant={Variant.SECONDARY} size={Size.MEDIUM}>
            Verify Email
          </Button>
        </div>

        {/* Group 3: Password Input + Button */}
        <div className="flex gap-3">
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Create password"
            value={passwordValue}
            setValue={setPasswordValue}
            size={Size.MEDIUM}
            variant={Variant.TERTIARY}
          />
          <Button onClick={handlePasswordAlert} variant={Variant.TERTIARY} size={Size.MEDIUM}>
            Validate Password
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Component Examples</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Size Variations</h3>
            <div className="flex gap-4 flex-wrap">
              <Input name="size-small" id="size-small" size={Size.SMALL} placeholder="Small input" />
              <Input name="size-medium" id="size-medium" size={Size.MEDIUM} placeholder="Medium input" />
              <Input name="size-large" id="size-large" size={Size.LARGE} placeholder="Large input" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Variant Colors</h3>
            <div className="flex gap-4 flex-wrap">
              <Input name="var-primary" id="var-primary" variant={Variant.PRIMARY} placeholder="Primary variant" />
              <Input
                name="var-secondary"
                id="var-secondary"
                variant={Variant.SECONDARY}
                placeholder="Secondary variant"
              />
              <Input name="var-tertiary" id="var-tertiary" variant={Variant.TERTIARY} placeholder="Tertiary variant" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
