import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className='p-10 bg-[#icicic] h-screen'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard