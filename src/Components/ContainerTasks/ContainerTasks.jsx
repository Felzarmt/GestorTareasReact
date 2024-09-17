import '../ContainerTasks/ContainerTasks.css'
import React, { useContext, useState } from 'react'


export const ContainerTasks = ({ children }) => {

  return (
    <ul className='container-tasks'>
    {children}
    </ul>
  )
}
