import React from 'react'
import './index.css'

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   * @default false
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { primary = false, size = 'medium', backgroundColor, label, ...others } = props

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...others}
    >
      {label}
    </button>
  )
}
