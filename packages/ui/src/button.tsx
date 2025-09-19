"use client";

import React from "react";
import { ReactNode } from "react";
import { Size } from "./size";
import { Variant } from "./variant";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: Size;
  variant?: Variant;
}

const sizeClasses = {
  [Size.SMALL]: "px-2 py-1 text-sm",
  [Size.MEDIUM]: "px-4 py-2 text-base",
  [Size.LARGE]: "px-6 py-3 text-lg",
};

const variantClasses = {
  [Variant.PRIMARY]: "bg-blue-300 text-white hover:bg-blue-400",
  [Variant.SECONDARY]: "bg-blue-200 text-white hover:bg-blue-300",
  [Variant.TERTIARY]: "bg-transparent text-blue-300 hover:bg-blue-100",
};

export const Button = ({
  children,
  className = "",
  onClick,
  href,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  const baseClasses = `rounded shadow focus:outline-none border transition cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
};
