import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onTaskDelete, onTaskEdit}) {
  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className="text-center font-italic">No tasks yet.</div>
  }

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          {...task}
          onDelete={() => onTaskDelete(task.id)}
          onEdit={() => onTaskEdit(task)}
        />
      ))}
    </ul>
  )
}

export default TaskList
