import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context/Index';
import ToDoImg from './assets/todoside.jpg'
import { ToDoForm, ToDoItems } from './Components/Index'

function App() {

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))


    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addToDo, deleteToDo }}>
      <div className="TodoWraper w-full h-screen flex">

        <div className="sideShow w-[600px] relative">
          <img
            src={ToDoImg}
            alt="ToDo Side Image"
            className='w-[100%] h-[100%] object-cover object-center'
          />
        </div>

        <div className="ToDoContainer p-10 w-full">
          <div className='text-center w-full todoTitle'>
            <h1 className="text-[#B2B5B9] text-4xl font-bold">Todo List Manage</h1>
          </div>

          <div className='flex justify-between mt-30 todos'>
            <div className='w-[40%] add'>
              <h2 className='text-[#B2B5B9] text-3xl font-bold mb-10 text-center'>Adding</h2>

              {/* todo form */}
              <ToDoForm />
            </div>

            <div className='w-[50%] added'>
              <h2 className='text-[#B2B5B9] text-3xl font-bold mb-10 text-center'>Added Tasks</h2>
              {/* todo items here */}
              {
                todos.map((todo) => (
                  <div key={todo.id} className='mb-5'>
                    <ToDoItems todo={todo} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
