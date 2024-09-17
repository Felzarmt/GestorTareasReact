import { ContainerTasks } from '../../Components/ContainerTasks/ContainerTasks'
import { NewTask } from '../../Components/NewTask/NewTask'
import '../HomeMain/HomeMain.css'
import React, { useState,useContext } from 'react'
import { ItemTasks } from '../../Components/ItemTasks/ItemTasks'
import { taskContext } from '../../Context/Context/Context'
import { InfoTasks } from '../../Components/InfoTasks/InfoTasks'
import { FilterTasks } from '../../Components/FilterTasks/FilterTasks'

export const HomeMain = () => {
  const context = useContext(taskContext)
  return (
    <div className='main-container'>
    <NewTask/>
    <InfoTasks />
    <FilterTasks />
    <ContainerTasks>
      {context.filteredTasks.map(task => <ItemTasks idTask={task.id} content={task.description} titleTask={task.title}></ItemTasks>)}
    </ContainerTasks>
    </div>
  )
}
