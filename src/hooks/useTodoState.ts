import { useEffect, useState } from 'react'

import type { Todo, TodoList } from '@/types/todo'

import { generateUuid } from '@/utils/uuid'

import { useStorage } from './useStorage'

export const useTodoState = () => {
  const { getValue, setValue } = useStorage('todoList')

  const [todoList, setTodoList] = useState<TodoList>([])

  const handleAddTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodoList = [
      ...todoList,
      {
        id: generateUuid(),
        ...todo,
      },
    ]
    setTodoList(newTodoList)
    setValue(JSON.stringify(newTodoList))
  }

  const handleUpdateTodo = (todo: Todo) => {
    const newTodoList = todoList.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          ...todo,
        }
      }

      return t
    })
    setTodoList(newTodoList)
    setValue(JSON.stringify(newTodoList))
  }

  const handleRemoveTodo = (id: string) => {
    const newTodoList = todoList.filter((t) => t.id !== id)
    setTodoList(newTodoList)
    setValue(JSON.stringify(newTodoList))
  }

  const handleClearTodoList = () => {
    setTodoList([])
    setValue(JSON.stringify([]))
  }

  useEffect(() => {
    const existingTodoList = getValue()

    if (existingTodoList) {
      setTodoList(JSON.parse(existingTodoList))
    }
  }, [getValue])

  return {
    todoList,
    handleAddTodo,
    handleClearTodoList,
    handleRemoveTodo,
    handleUpdateTodo,
  }
}
