import React, { useMemo, useState } from 'react'
import TaskList from './components/TaskList.jsx'
import NewTaskForm from './components/NewTaskForm.jsx'
import Footer from './components/Footer.jsx'
import TasksFilter from './components/TasksFilter.jsx'
import { initialTasks } from './data/tasks.js'

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  const nextId = useMemo(
    () => (arr => Math.max(...arr.map(t => t.id), 0) + 1)(tasks),
    []
  )
  const [idCounter, setIdCounter] = useState(nextId)

  const addTask = (title) => {
    const t = title.trim()
    if (!t) return
    setTasks(prev => [
      ...prev,
      { userId: 0, id: idCounter, title: t, completed: false, createdAt: new Date() }
    ])
    setIdCounter(n => n + 1)
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(x => x.id === id ? { ...x, completed: !x.completed } : x))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(x => x.id !== id))
  }

  const updateTaskTitle = (id, newTitle) => {
    const t = newTitle.trim()
    if (!t) return
    setTasks(prev => prev.map(x => x.id === id ? { ...x, title: t } : x))
  }

  const clearCompleted = () => {
    setTasks(prev => prev.filter(x => !x.completed))
  }

  const remainingCount = useMemo(() => tasks.filter(x => !x.completed).length, [tasks])

  const visibleTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter(x => !x.completed)
    if (filter === 'completed') return tasks.filter(x => x.completed)
    return tasks
  }, [tasks, filter])

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
        <TasksFilter value={filter} onChange={setFilter} />
        <Footer onClearCompleted={clearCompleted} />
      </footer>
    </section>
  )
}

export default App