import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import clsx from 'clsx'
import type { FC } from 'react'

import { useTheme } from '@/hooks/useTheme'

import { flags } from '@/constants/flags'

import { Button } from '../shared/button/Button'

export const ThemeSwitcher: FC = () => {
  const { theme, setDarkMode, setLightMode } = useTheme()

  if (!flags.allowThemeChange) return null

  return (
    <ul className="flex gap-1">
      <li>
        <Button
          className={clsx({
            'text-gray-500 hover:text-blue-600': theme === 'dark',
            'hover:!text-white': theme === 'light',
          })}
          variant="text"
          onClick={setLightMode}
        >
          <SunIcon width={18} height={18} />
        </Button>
      </li>
      <li>
        <Button
          className={clsx({
            'text-gray-500 hover:text-blue-600': theme === 'light',
            'hover:!text-white': theme === 'dark',
          })}
          variant="text"
          onClick={setDarkMode}
        >
          <MoonIcon width={18} height={18} />
        </Button>
      </li>
    </ul>
  )
}
