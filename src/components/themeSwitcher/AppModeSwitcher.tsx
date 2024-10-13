import type { FC } from 'react'

import { flags } from '@/constants/flags'

import { useAppMode } from '@/contexts/useAppMode'

import { Button } from '../shared/button/Button'

export const AppModeSwitcher: FC = () => {
  const { appMode, handleAppModeChange } = useAppMode()

  if (!flags.allowAppModeChange) return null

  return (
    <div className="flex">
      <Button
        className="h-6 w-10 !rounded-e-none rounded-s-md"
        active={appMode === 'visual'}
        variant="filled"
        onClick={() => handleAppModeChange('visual')}
      >
        UI
      </Button>
      <Button
        className="h-6 w-10 !rounded-s-none rounded-e-md"
        active={appMode === 'markdown'}
        variant="filled"
        onClick={() => handleAppModeChange('markdown')}
      >
        MD
      </Button>
    </div>
  )
}
