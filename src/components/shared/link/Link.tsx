import { clsx } from 'clsx'
import type { FC, PropsWithChildren } from 'react'

type Props = {
  href: string
  className?: string
  disabled?: boolean
}

export const Link: FC<PropsWithChildren<Props>> = ({
  className,
  disabled,
  children,
  href,
}) => (
  <a
    className={clsx(
      'transition-colors hover:text-blue-600',
      {
        'disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:text-gray-300':
          disabled,
      },
      className
    )}
    href={href}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </a>
)
