import { TrashIcon } from '@radix-ui/react-icons'

import clsx from 'clsx'
import type { ChangeEvent, FC } from 'react'

import { Button } from '@/components/shared/button/Button'
import { Checkbox } from '@/components/shared/checkbox/Checkbox'

import type { Todo as TodoType } from '@/types/todo'

type Props = {
  todo: TodoType
  onClick: () => void
  onDelete: () => void
  onTodoTextChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Todo: FC<Props> = ({
  todo,
  onClick,
  onDelete,
  onTodoTextChange,
}) => (
  <div className="flex items-center justify-between gap-1">
    <label
      htmlFor={todo.id}
      className="flex w-full items-center gap-2 dark:text-gray-400"
    >
      <Checkbox checked={todo.done} onClick={onClick} />

      <span className="grow">
        <input
          className={clsx(
            'w-full border-0 bg-transparent outline-none transition-colors',
            {
              'text-slate-500 line-through dark:text-gray-500 dark:hover:text-gray-500':
                todo.done,
              'text-slate-700 hover:text-slate-900 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300':
                !todo.done,
            }
          )}
          type="text"
          value={todo.text}
          onChange={onTodoTextChange}
        />
      </span>
    </label>

    <Button
      className="w-8 min-w-8 text-slate-700 dark:text-gray-400 dark:hover:text-blue-600"
      variant="text"
      onClick={onDelete}
    >
      <TrashIcon className="text-inherit transition-colors" />
    </Button>
  </div>
)
