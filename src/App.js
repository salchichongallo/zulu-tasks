import React from 'react'
import {isEmpty} from 'ramda'
import {nanoid} from 'nanoid'
import TaskList from './TaskList'
import AppTitle from './components/AppTitle'

const createTask = name => ({name, id: nanoid()})

function App() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  const [editingTask, setEditingTask] = React.useState(null)
  const isEditing = !!editingTask

  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (task || task === '') {
      setError(null)
    }
  }, [task])

  const validateForm = () => {
    if (isEmpty(task)) {
      setError('Please enter a task name.')
      return false
    }
    return true
  }

  const addTask = event => {
    event.preventDefault()
    if (validateForm()) {
      setTasks(tasks => [...tasks, createTask(task)])
      setTask('')
    }
  }

  const deleteTask = taskId => {
    setTasks(tasks => tasks.filter(t => t.id !== taskId))
  }
  const editTask = event => {
    event.preventDefault()
    if (!validateForm()) return
    setTasks(tasks =>
      tasks.map(t =>
        t.id === editingTask.id ? {...editingTask, name: task} : t
      )
    )
    setTask('')
    setEditingTask(null)
  }

  const startEditing = task => {
    setEditingTask(task)
    setTask(task.name)
  }

  return (
    <div className="container mt-5">
      <AppTitle />
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <TaskList
            tasks={tasks}
            onTaskDelete={deleteTask}
            onTaskEdit={startEditing}
          />
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {isEditing ? 'Edit Task' : 'Add Task'}
          </h4>
          <form onSubmit={isEditing ? editTask : addTask}>
            <input
              value={task}
              onChange={event => setTask(event.currentTarget.value)}
              type="text"
              className="form-control mb-2"
              placeholder={isEditing ? 'Enter new name...' : 'Enter task...'}
            />
            {error && <div className="text-danger mb-2">{error}</div>}
            <button
              type="submit"
              className={
                isEditing
                  ? 'btn btn-block btn-dark'
                  : 'btn btn-block btn-warning'
              }
            >
              {isEditing ? 'Save' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
