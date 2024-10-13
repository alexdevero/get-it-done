import { TrashIcon } from '@radix-ui/react-icons'

import {
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
  useMemo,
  useState,
} from 'react'

import { NewTodo } from '@/components/newTodo/NewTodo'
import { Todo } from '@/components/todo/Todo'

import { useTodoState } from '@/hooks/useTodoState'

import { Button } from '../shared/button/Button'
import { Tooltip } from '../shared/tooltip/Tooltip'
import { TodoListHeader } from '../todoListHeader/TodoListHeader'

export const TodoList: FC = () => {
  const {
    todoList,
    handleAddTodo,
    handleUpdateTodo,
    handleRemoveTodo,
    handleClearTodoList,
  } = useTodoState()

  const showClearAllBtn = useMemo(
    () => todoList.some((todo) => todo.done),
    [todoList]
  )

  const [newTodo, setNewTodo] = useState('')

  const handleTodoInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setNewTodo(e.target.value)

  const handleTodoInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const newTodoValue = newTodo.trim()
    if (e.key === 'Enter' && newTodoValue.length > 0) {
      handleAddTodo({
        done: false,
        text: newTodoValue,
      })
      setNewTodo('')
    }
  }

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[520px] grow flex-col">
      <TodoListHeader todoList={todoList} />

      <div className="mb-3 flex h-6 items-center justify-end">
        {showClearAllBtn && (
          <Tooltip content="Clear all done todos">
            <Button
              className="w-8 min-w-8 text-slate-700 dark:text-gray-400 dark:hover:text-blue-600"
              variant="text"
              onClick={handleClearTodoList}
            >
              <TrashIcon className="text-inherit transition-colors" />
            </Button>
          </Tooltip>
        )}
      </div>

      <div className="flex flex-col">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={() =>
              handleUpdateTodo({
                ...todo,
                done: !todo.done,
              })
            }
            onDelete={() => handleRemoveTodo(todo.id)}
            onTodoTextChange={(e) =>
              handleUpdateTodo({
                ...todo,
                text: e.target.value,
              })
            }
          />
        ))}

        <NewTodo
          btnDisabled={!newTodo.length}
          value={newTodo}
          onChange={handleTodoInputChange}
          onKeyDown={handleTodoInputKeyDown}
          onAddTodo={() => {
            handleAddTodo({
              done: false,
              text: newTodo,
            })
          }}
        />
      </div>
    </div>
  )
}
