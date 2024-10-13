import clsx from 'clsx'
import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from 'react'

type Props = {
  active?: boolean
  variant?: 'outline' | 'filled' | 'text'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      active,
      className,
      disabled,
      children,
      type = 'button',
      variant = 'outline',
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        'flex h-8 items-center justify-center p-1 text-sm transition-colors focus:outline-none focus-visible:outline-none',
        {
          'cursor-not-allowed !text-gray-500 hover:!text-gray-500': disabled,
          'hover:text-blue-500': !disabled,
          'border border-gray-600': variant === 'outline',
          'bg-gray-600/50 text-white/65 hover:bg-gray-600 hover:text-white':
            variant === 'filled' && !active,
          'bg-gray-600 text-white/85 hover:text-white/85':
            variant === 'filled' && active,
        },
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
)
