import React, { useContext, useEffect } from 'react'
import { taskContext } from '../../Context/Context/Context';
import '../InfoTasks/InfoTasks.css';

export const InfoTasks = () => {

    const context = useContext(taskContext)

    useEffect(() => {
        let pending = context.tasks.filter(tasks => tasks.state === false)
        let resolve = context.tasks.filter(tasks => tasks.state === true)

        context.setPendingTasks(pending.length)
        context.setDoneTasks(resolve.length)
    }, [context.tasks])
  return (
    <>
    <h2 className='info-tasks'>You have <span className='task-pending'>{context.pendingTasks}</span> pendent tasks and <span className='task-done'>{context.doneTasks}</span> finished tasks</h2>
    <hr />
    </>
  )
}
