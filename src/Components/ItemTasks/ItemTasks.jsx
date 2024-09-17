import { taskContext } from '../../Context/Context/Context'
import '../ItemTasks/ItemTasks.css'

import React, { useContext } from 'react'

export const ItemTasks = ({idTask, content, titleTask}) => {

  const { tasks, updateTasks} = useContext(taskContext)

  const task = tasks.find( task => task.id === idTask)

  const handleCheckboxChange = () => {
    updateTasks(idTask, !task.state)
  }

  return (
    <>
    <li id={idTask} className={task.state ? "item-task checked" : "item-task"}>
      <div className={task.state ? "circle-state circle-green" : "circle-state"}></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input type="checkbox" checked={task.state} onChange={handleCheckboxChange} />
    </li>
    </>
  )
}
