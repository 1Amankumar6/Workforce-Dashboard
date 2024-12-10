import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl py-9 px-6 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>
          0
        </h2>
        <h3 className='text-xl font-bold '>
          New Task
        </h3>
      </div>
      <div className='rounded-xl py-9 px-6 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>
          0
        </h2>
        <h3 className='text-xl font-bold '>
          New Task
        </h3>
      </div>
      <div className='rounded-xl py-9 px-6 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>
          0
        </h2>
        <h3 className='text-xl font-bold '>
          New Task
        </h3>
      </div>
      <div className='rounded-xl py-9 px-6 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>
          0
        </h2>
        <h3 className='text-xl font-bold '>
          New Task
        </h3>
      </div>
    </div>
  )
}

export default TaskListNumber