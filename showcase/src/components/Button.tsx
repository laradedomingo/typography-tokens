import React from 'react'
import '../styles/Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'link'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium',
  children,
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
