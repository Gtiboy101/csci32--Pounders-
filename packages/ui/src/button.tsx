'use client'

import { ReactNode } from 'react'
import { getSizeStyles, Size } from './size'
import { getVariantBackgroundStyles, getVariantButtonTextStyles, getVariantBorderStyles, Variant } from './variant'
import { getCommonButtonStyles } from './tokens'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
  type = 'button',
}: ButtonProps) => {
  const sizeCssClasses = getSizeStyles(size)
  const variantBackgroundClasses = getVariantBackgroundStyles(variant)
  const variantTextClasses = getVariantButtonTextStyles(variant)
  const variantBorderClasses = getVariantBorderStyles(variant)
  const commonCssClasses = getCommonButtonStyles()
  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundClasses} ${variantTextClasses} ${variantBorderClasses} ${commonCssClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
