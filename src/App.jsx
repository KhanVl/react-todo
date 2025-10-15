import React from 'react'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import TasksFilter from './components/TasksFilter'

function App() {
  const tasks = [
    { id: 1, title: 'Learn React', completed: false, createdAt: new Date() },
    { id: 2, title: 'Build TODO UI', completed: true,  createdAt: new Date(Date.now() - 3600_000) },
    { id: 3, title: 'Push to GitHub', completed: false, createdAt: new Date(Date.now() - 86_400_000) }
  ]

  const activeFilter = 'all' 
  const remainingCount = tasks.filter(t => !t.completed).length

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        {}
        <NewTaskForm onAddTask={() => {}} />
      </header>

      <section className="main">
        <TaskList tasks={tasks} />
      </section>

      <footer className="footer">
        <span className="todo-count"><strong>{remainingCount}</strong> items left</span>

        <TasksFilter value={activeFilter} onChange={() => {}} />

        <Footer onClearCompleted={() => {}} />
      </footer>
    </section>
  )
}

export default App