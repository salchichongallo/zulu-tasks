import React from 'react'
import {isEmpty} from 'ramda'
import {nanoid} from 'nanoid'
import TaskList from './TaskList'

const createTask = name => ({name, id: nanoid()})

function App() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  const addTask = event => {
    event.preventDefault()
    if (isEmpty(task)) {
      console.info('Task is empty, skipping.')
      return
    }
    setTasks(tasks => [...tasks, createTask(task)])
    setTask('')
  }

  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <TaskList tasks={tasks} />
        </div>
        <div className="col-4">
          <h4 className="text-center">Add Task</h4>
          <form onSubmit={addTask}>
            <input
              value={task}
              onChange={event => setTask(event.currentTarget.value)}
              type="text"
              className="form-control mb-2"
              placeholder="Enter task..."
            />
            <button type="submit" className="btn btn-dark btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
