import { CheckIcon } from '@radix-ui/react-icons'

import { clsx } from 'clsx'
import type { FC, HTMLAttributes } from 'react'

import { useAppMode } from '@/contexts/useAppMode'

type Props = {
  checked: boolean
} & HTMLAttributes<HTMLInputElement>

export const Checkbox: FC<Props> = ({
  className,
  checked,
  onClick,
  ...props
}) => {
  const { appMode } = useAppMode()

  return (
    <span
      className={clsx(
        'flex h-4 w-4 items-center justify-center transition-colors hover:cursor-pointer',
        {
          'border-gray-500': checked && appMode === 'visual',
          'border-gray-400': !checked && appMode === 'visual',
          'flex h-4 w-4 items-center justify-center rounded-sm border transition-colors hover:border-blue-500 [&>svg]:hover:text-blue-500':
            appMode === 'visual',
          'before:content-["["] after:content-["]"]': appMode === 'markdown',
        }
      )}
      onClick={onClick}
    >
      {appMode === 'markdown' && (
        <span
          className={clsx({
            invisible: !checked,
            visible: checked,
          })}
        >
          x
        </span>
      )}
      <CheckIcon
        className={clsx('opacity-0 transition-all', {
          'text-gray-500 opacity-100': checked,
        })}
      />
      <input className={clsx('hidden', className)} type="checkbox" {...props} />
    </span>
  )
}
