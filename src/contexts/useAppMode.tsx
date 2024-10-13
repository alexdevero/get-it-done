import type { FC, PropsWithChildren } from 'react'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { useContext } from '@/hooks/useContext'
import { useStorage } from '@/hooks/useStorage'

type AppMode = 'markdown' | 'visual'

type AppModeContext = {
  appMode: AppMode
  handleAppModeChange: (mode: AppMode) => void
}

const appModeContext = createContext<AppModeContext | undefined>(undefined)

export const AppModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { getValue, setValue } = useStorage('appMode')
  const [appMode, setAppMode] = useState<AppMode>('visual')

  const handleAppModeChange = useCallback(
    (mode: AppMode) => {
      setAppMode(mode)
      setValue(mode)
    },
    [setValue]
  )

  const value = useMemo(
    () => ({ appMode, handleAppModeChange }),
    [appMode, handleAppModeChange]
  )

  useEffect(() => {
    const existingMode = getValue()

    if (existingMode) {
      setAppMode(existingMode as AppMode)
    } else {
      setAppMode('visual')
      setValue('visual')
    }
  }, [getValue, setValue])

  return (
    <appModeContext.Provider value={value}>{children}</appModeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppMode = () => useContext(appModeContext)
