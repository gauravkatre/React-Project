import React from 'react'
import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import './App.css'

function App() {


  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
