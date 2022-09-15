// Write your code here
import './index.css'

import {Component} from 'react'

const TodoItem = props => {
  const {Todo, deleteItem} = props

  const {title, id} = Todo

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="Link">
      <p className="para">{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
