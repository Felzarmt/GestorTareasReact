import React, { useRef, useContext, useState } from'react'
import { taskContext } from '../../Context/Context/Context';
import { v4 as uuidv4 } from 'uuid'
import '../NewTask/NewTask.css';


export const NewTask = () => {

  const context = useContext(taskContext)

  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const txtTitle = useRef('')
  const txtDescription = useRef('')

  const handleTitleTask = (event) => setTitleTask(event.target.value)
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

  const handleCreateTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      state: false,
    }

    if (newTask.title === '' || newTask.description === '') {
      alert("You can't add an empty task")
    }else {
      context.setTasks([...context.tasks,newTask])
      context.setFilteredTasks([...context.tasks,newTask])
  
      txtTitle.current.value = ''
      txtDescription.current.value = ''
    }
  }

  return (
    <>
    <div className='home-main'> 
      <h2>Add a new task</h2>
      <div className='infocontent'>
      <label>Tittle</label>
      <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' type="text" placeholder='Add tittle'/> <br />
      <label>Description</label>
      <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' type='text' placeholder='Add an description'/>
      </div>
      <button onClick={handleCreateTask} className='btn-new-task'>Add</button>
    </div>
    </>
  )
}
