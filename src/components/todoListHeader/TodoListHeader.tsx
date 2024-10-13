import { CopyIcon } from '@radix-ui/react-icons'

import type { FC } from 'react'

import { Button } from '@/components/shared/button/Button'
import { Tooltip } from '@/components/shared/tooltip/Tooltip'

import { useExportTodoList } from '@/hooks/useExportTodoList'

import type { TodoList } from '@/types/todo'

import { appTitle } from '@/constants/app'

type Props = {
  todoList: TodoList
}

export const TodoListHeader: FC<Props> = ({ todoList }) => {
  const { exportTodoListToOutputFormat } = useExportTodoList()

  return (
    <div className="grid grid-cols-[24px_auto_24px] justify-between">
      <div />
      <h1 className="mb-9 flex w-full gap-2 text-center text-3xl font-bold text-slate-700 dark:text-white">
        {appTitle}

        <Tooltip content="Copy todo list">
          <Button
            disabled={!todoList.length}
            className="text-slate-700 dark:text-gray-400 dark:hover:text-blue-600"
            variant="text"
            onClick={() => exportTodoListToOutputFormat(todoList)}
          >
            <CopyIcon className="mt-2 text-inherit transition-colors" />
          </Button>
        </Tooltip>
      </h1>
    </div>
  )
}
