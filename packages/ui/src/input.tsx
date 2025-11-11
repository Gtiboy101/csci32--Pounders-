import React, { forwardRef } from 'react'
import { Size, getInputSizeStyles } from './size'
import { Variant, getVariantInputTextStyles, getVariantBorderStyles, getVariantOutlineStyles } from './variant'
import { getCommonInputStyles } from './tokens'
import { HTMLInputTypeAttribute } from 'react'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder?: string
  className?: string
  size?: Size
  variant?: Variant
  type?: HTMLInputTypeAttribute
  setValue?: (newValue: string) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      className,
      size = Size.MEDIUM,
      variant = Variant.PRIMARY,
      type = 'text',
      setValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = getInputSizeStyles(size)
    const textClasses = getVariantInputTextStyles(variant)
    const borderClasses = getVariantBorderStyles(variant)
    const outlineClasses = getVariantOutlineStyles(variant)
    const commonClasses = getCommonInputStyles()

    const completedCssClasses = `${sizeClasses} ${textClasses} ${borderClasses} ${outlineClasses} ${commonClasses} ${className || ''}`

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(event.target.value)
      }
      if (onChange) {
        onChange(event)
      }
    }

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={completedCssClasses}
        {...props}
      />
    )
  },
)
