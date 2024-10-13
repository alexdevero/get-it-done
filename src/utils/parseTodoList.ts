import type { Todo, TodoList } from '@/types/todo'

const isTodo = (obj: unknown): obj is Todo => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'done' in obj &&
    'text' in obj &&
    'id' in obj &&
    typeof obj.done === 'boolean' &&
    typeof obj.id === 'string' &&
    typeof obj.text === 'string'
  )
}

const parseErrorMessage = 'Invalid format of todo list'
export const parseTodoList = (possibleTodoList: string): TodoList => {
  let parsedTodoList: unknown

  try {
    parsedTodoList = JSON.parse(possibleTodoList) as unknown
  } catch {
    throw new Error(parseErrorMessage)
  }

  if (!Array.isArray(parsedTodoList)) {
    throw new Error(parseErrorMessage)
  }

  if (parseTodoList.length === 0) {
    return []
  }

  if (parsedTodoList.every(isTodo)) {
    return parsedTodoList as TodoList
  }

  throw new Error(parseErrorMessage)
}
