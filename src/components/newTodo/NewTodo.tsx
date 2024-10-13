import { PlusIcon } from '@radix-ui/react-icons'

import type { ChangeEvent, FC, KeyboardEvent } from 'react'

import { Button } from '@/components/shared/button/Button'
import { Tooltip } from '@/components/shared/tooltip/Tooltip'

type Props = {
  value: string
  btnDisabled: boolean
  onAddTodo: () => void
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const NewTodo: FC<Props> = ({
  value,
  btnDisabled,
  onAddTodo,
  onChange,
  onKeyDown,
}) => (
  <div className="mt-4 flex items-center gap-1">
    <textarea
      className="h-10 w-full resize-y border-b border-gray-400/25 bg-transparent px-1 py-1.5 text-sm text-slate-700 transition-colors placeholder:text-slate-700 hover:border-blue-600 focus:border-blue-600 focus:outline-none dark:text-gray-300"
      value={value}
      placeholder="..."
      onChange={onChange}
      onKeyDown={onKeyDown}
    />

    <Tooltip content="Add todo">
      <Button
        className="text-slate-700 dark:text-gray-400 dark:hover:text-blue-600"
        disabled={btnDisabled}
        variant="text"
        onClick={onAddTodo}
      >
        <PlusIcon className="text-inherit transition-colors" />
      </Button>
    </Tooltip>
  </div>
)
