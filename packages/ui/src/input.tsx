import { Size, getInputSizeStyles } from './size'
import { Variant, getVariantInputTextStyles, getVariantBorderStyles, getVariantOutlineStyles } from './variant'
import { getCommonInputStyles } from './tokens'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  placeholder?: string
  className?: string
  size?: Size
  variant?: Variant
  type?: HTMLInputTypeAttribute
  defaultValue?: any
  value?: any
  setValue?: (newValue: string) => void
  name: string
  id: string
}

export function Input({
  placeholder,
  className,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
  type = 'text',
  defaultValue,
  value,
  setValue,
  name,
  id,
}: InputProps) {
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
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      className={completedCssClasses}
    />
  )
}
