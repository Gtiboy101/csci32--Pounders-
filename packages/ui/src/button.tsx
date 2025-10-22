'use client'

import { ReactNode } from 'react'
import { getSizeStyles, Size } from './size'
import { getVariantBackgroundStyles, getVariantButtonTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonButtonStyles } from './tokens'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  const sizeCssClasses = getSizeStyles(size)
  const variantBackgroundClasses = getVariantBackgroundStyles(variant)
  const variantTextClasses = getVariantButtonTextStyles(variant)
  const variantOutlineClasses = getVariantOutlineStyles(variant)
  const commonCssClasses = getCommonButtonStyles()
  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundClasses} ${variantTextClasses} ${variantOutlineClasses} ${commonCssClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
