import React from 'react'

function TaskItem({name}) {
  return (
    <li className="list-group-item">
      <span className="lead">{name}</span>
      <button type="button" className="btn btn-danger btn-sm float-right mx-2">
        Delete
      </button>
      <button type="button" className="btn btn-warning btn-sm float-right">
        Edit
      </button>
    </li>
  )
}

export default TaskItem
