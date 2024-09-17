import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext();

const tsk = [
    { id: uuidv4(), title: "Tarea de ejemplo", description: "Tarea de ejemplo", state: false },
    { id: uuidv4(), title: "Tarea 2", description: "Tarea 2", state: true },
    { id: uuidv4(), title: "Tarea 5", description: "Tararea 3", state: false },
    { id: uuidv4(), title: "Tarea 4", description: "Tarea 4", state: true },
];

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(tsk);
    const [filteredTasks, setFilteredTasks] = useState(tsk);
    const [pendingTasks, setPendingTasks] = useState(0)
    const [doneTasks, setDoneTasks] = useState(0)

    const updateTasks = (taskId, newStatus) => {
        setTasks(prevTasks => 
            prevTasks.map(task =>
                task.id === taskId? {...task, state: newStatus } : task
            )
        )
    }

    return (
        <taskContext.Provider value={{
            tasks,
            setTasks,
            filteredTasks,
            setFilteredTasks,
            pendingTasks,
            setPendingTasks,
            doneTasks,
            setDoneTasks,
            updateTasks
        }}>
            {children}
        </taskContext.Provider>
    );
};
