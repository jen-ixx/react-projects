import { useFormik } from 'formik';
import React, { useState } from 'react'

const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };


  return (

    <div className='bg-gray-300 h-screen'>

      <div className='bg-[green] text-white h-16 justify-center text-center pt-4'>
        <h1 className='font-bold text-2xl'>To-do List</h1>
      </div>

      <form className='mt-14 pt-4 pl-6 bg-white h-[450px] w-[600px] mx-auto rounded-md'>

        <input
          onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" placeholder='write your task...' className='font-serif font-semibold h-12 border-2 border-black w-[550px] pl-2'
        />

        <button onClick={addTask} className='bg-[green] mt-10 h-10 w-40 rounded-md text-white'>Add</button>

        <ul className='pt-6'>
          {tasks.map((task, index) => {
            return <li key={index}>
              {task}
              <button className='bg-[green] text-white ml-4 w-20 h-8 rounded-md' onClick={(e) => removeTask(index)}>Remove</button>
            </li>
          })}
        </ul>
      </form>

    </div>
  )
}

export default TodoList
