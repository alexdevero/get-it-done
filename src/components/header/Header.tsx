import type { FC } from 'react'

import { appName } from '@/constants/app'

import TargetSvg from '@/assets/target.svg'

import { AppModeSwitcher } from '../themeSwitcher/AppModeSwitcher'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'

export const Header: FC = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-3">
        <a
          className="flex items-center gap-1 text-sm font-bold text-slate-950 dark:text-white dark:hover:text-white"
          href="/"
        >
          <img src={TargetSvg} alt={`${appName} logo`} className="w-4" />
          <span className="leading-none">{appName}</span>
        </a>

        <div className="flex flex-col items-end gap-2">
          <ThemeSwitcher />
          <AppModeSwitcher />
        </div>
      </nav>
    </header>
  )
}
