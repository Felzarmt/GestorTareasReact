import { taskContext } from '../../Context/Context/Context';
import '../FilterTasks/FilterTasks.css';

import React, { useContext } from 'react'

export const FilterTasks = () => {

  const context = useContext(taskContext)

    const handleFilters = (event) => {
        let currentOption = event.target.value
        console.log(currentOption)
        if(currentOption === 'Pending'){
          context.setFilteredTasks(context.tasks.filter(task => !task.state))
        }else if (currentOption === 'Done'){
          context.setFilteredTasks(context.tasks.filter(task => task.state))
        }else {
          context.setFilteredTasks(context.tasks)
        }
    }

  return (
    <div className='container-filters'>
        <label>Filter by</label>
        <select onChange={handleFilters}>
            <option value='All' className='opt opt1'>All</option>
            <option value='Pending' className='opt opt1'>Pending</option>
            <option value='Done' className='opt opt1'>Done</option>
        </select>
    </div>
  )
}
