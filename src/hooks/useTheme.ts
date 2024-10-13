import { useCallback, useEffect, useState } from 'react'

import { useStorage } from './useStorage'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>('light')
  const { setValue, getValue, removeValue } = useStorage('theme')

  // Whenever the user explicitly chooses light mode
  const setLightMode = useCallback(() => {
    setValue('light')
    document.documentElement.classList.remove('dark')
    setTheme('light')
  }, [setValue])

  const setDarkMode = useCallback(() => {
    // Whenever the user explicitly chooses dark mode
    setValue('dark')
    document.documentElement.classList.add('dark')
    setTheme('dark')
  }, [setValue])

  const resetTheme = useCallback(() => {
    // Whenever the user explicitly chooses to respect the OS preference
    removeValue()
    document.documentElement.classList.remove('dark')
    setTheme(null)
  }, [removeValue])

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const themeValue = getValue()
    if (
      themeValue === 'dark' ||
      (themeValue === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [getValue, setDarkMode, setLightMode, setValue])

  return { theme, setLightMode, setDarkMode, resetTheme }
}
