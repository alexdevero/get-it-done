import type { FC, PropsWithChildren } from 'react'

import { AppModeProvider } from './contexts/useAppMode'

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <AppModeProvider>{children}</AppModeProvider>
)
