import logo from './logo.svg'
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import React, { useState } from 'react'
import { nanoid }from 'nanoid'


const FILTER_MAP = {
  // these are functions to be used to filter tasks data array
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

// Object.keys gets an array 
const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {  
  const [tasks, setTasks ] = useState(props.tasks)

  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        // can use the spread operator to create objects as well as arrays
        return {...task, completed: !task.completed }
      }
      return task
    })
    // call setTasks with new array to update the state in React
    setTasks(updatedTasks)
  }

  function deleteTask(id){
    const tasksLeft = tasks.filter(task => id !== task.id)
    setTasks(tasksLeft)
  }

  function editTask(id, newName){
    // using map which creates a new array
    const editedTaskList = tasks.map(task => {
      if(id === task.id){
        return {...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const [filter, setFilter] = useState(props.name)

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter} />
  ))

  // remove props from tasklist
const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ))


    const tasksNumber = taskList.length !== 1 ? 'tasks' : 'task'
    const headingText = `${taskList.length}
    ${tasksNumber} remaining`

  return (
    <div className="todoapp stack-large">
      <img src={logo} alt={logo} />
      <h1>React ToDo</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul aria-labelledby="list-heading">
        {/* <Todo name="Eat" completed={true} id="todo-0" />
        <Todo name="Sleep" completed={false} id="todo-1" />
        <Todo name="Repeat" completed={false} id="todo-2" /> */}
        {taskList}
      </ul>
    </div>
  )
}

export default App
