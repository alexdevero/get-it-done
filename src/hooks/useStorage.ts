import { useCallback } from 'react'

import type { StorageKeys } from '@/types/storageKeys'

import { appName } from '@/constants/app'

type StorageType = 'localStorage' | 'sessionStorage'

export const useStorage = (
  key: StorageKeys,
  storageType: StorageType = 'localStorage'
) => {
  const keyWithPrefix = `${appName}_${key}`

  const getValue = useCallback(() => {
    if (storageType === 'localStorage') {
      return localStorage.getItem(keyWithPrefix)
    }

    return sessionStorage.getItem(keyWithPrefix)
  }, [keyWithPrefix, storageType])

  const setValue = useCallback(
    (value: string) => {
      if (storageType === 'localStorage') {
        return localStorage.setItem(keyWithPrefix, value)
      }

      return sessionStorage.setItem(keyWithPrefix, value)
    },
    [keyWithPrefix, storageType]
  )

  const removeValue = useCallback(() => {
    if (storageType === 'localStorage') {
      return localStorage.removeItem(keyWithPrefix)
    }

    return sessionStorage.removeItem(keyWithPrefix)
  }, [keyWithPrefix, storageType])

  return { getValue, setValue, removeValue }
}
