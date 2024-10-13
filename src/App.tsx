import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { TodoList } from './components/todoList/TodoList'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-gray-300 px-3 dark:bg-[#1a1a1a]">
      <Header />

      <TodoList />

      <Footer />
    </main>
  )
}
