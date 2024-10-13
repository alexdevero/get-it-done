import { type Context, useContext as useContextBase } from 'react'

export const useContext = <T>(context: Context<T | undefined>): T => {
  const result = useContextBase(context)
  if (!result) {
    throw Error(`Missing context: ${context.displayName || 'ctx'}`)
  }

  return result
}
