import React from 'react'
import clsx from 'clsx'
import './Button.css'

function Button({
  icon,
  children,
  type = 'button',
  variation = 'primary',
  ...restProps
}) {
  return (
    <button
      {...restProps}
      type={type}
      className={clsx('Button', `Button--variation-${variation}`)}
    >
      {icon && React.cloneElement(icon, {className: 'Button-icon'})}
      {children}
    </button>
  )
}

export default Button
