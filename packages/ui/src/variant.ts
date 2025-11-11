export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-white hover:bg-gray-50 active:bg-gray-100'
    case Variant.SECONDARY:
      return 'bg-white hover:bg-gray-50 active:bg-gray-100'
    case Variant.TERTIARY:
      return 'bg-white hover:bg-gray-50 active:bg-gray-100'
  }
}

export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-black'
    case Variant.SECONDARY:
      return 'outline-black'
    case Variant.TERTIARY:
      return 'outline-black'
  }
}

export function getVariantStyles(variant: Variant) {
  return getVariantOutlineStyles(variant)
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-black'
    case Variant.SECONDARY:
      return 'border-2 border-black'
    case Variant.TERTIARY:
      return 'border-2 border-black'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
  }
}

export function getVariantButtonTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
  }
}
