import React, { useState } from 'react'
import TaskList from './components/TaskList.jsx'
import NewTaskForm from './components/NewTaskForm.jsx'
import Footer from './components/Footer.jsx'
import TasksFilter from './components/TasksFilter.jsx'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React',     completed: false, createdAt: new Date() },
    { id: 2, title: 'Build TODO UI',   completed: true,  createdAt: new Date(Date.now() - 3600_000) },
    { id: 3, title: 'Push to GitHub',  completed: false, createdAt: new Date(Date.now() - 86_400_000) }
  ])

  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  const addTask = (title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title: trimmed, completed: false, createdAt: new Date() }
    ])
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const updateTaskTitle = (id, newTitle) => {
    const trimmed = newTitle.trim()
    if (!trimmed) return
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, title: trimmed } : t)
    )
  }

  // Для отображения счётчика
  const remainingCount = tasks.filter(t => !t.completed).length

  const visibleTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>

      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" readOnly />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEditTitle={updateTaskTitle}
        />
      </section>

      <footer className="footer">
        <span className="todo-count"><strong>{remainingCount}</strong> items left</span>

        <TasksFilter
          value={filter}
          onChange={setFilter}
        />

        <Footer onClearCompleted={() => {
          setTasks(prev => prev.filter(t => !t.completed))
        }}/>
      </footer>
    </section>
  )
}

export default App