import type { TodoList } from '@/types/todo'

import { appTitle } from '@/constants/app'

export const useExportTodoList = () => {
  const exportTodoListToOutputFormat = async (todoList: TodoList) => {
    const header = `# ${appTitle}`
    const content = todoList
      .map((todo) => {
        if (todo.done) {
          return `- [X] ${todo.text}`.trim()
        }

        return `- [ ] ${todo.text}`.trim()
      })
      .join('\n')

    const output = `${header}

${content}
`

    await navigator.clipboard.writeText(output)
  }

  return { exportTodoListToOutputFormat }
}
