import React, { useState } from 'react'
import { useTodo } from '../Context/Index'

const ToDoForm = () => {

    const [todos, setTodos] = useState("")
    const { addToDo } = useTodo()


    const add = (e) => {
        e.preventDefault()
        console.log(setTodos);

        if (!todos) return;

        addToDo({ text: todos })
        setTodos("")
        console.log(todos);
    }


    return (
        <>
            <form className='flex flex-col onSub w-full' onSubmit={add}>
                <input
                    type="text"
                    placeholder='Add a new task'
                    className='p-4 mb-5 border border-gray-300 rounded outline-0 placeholder:text-[#B2B5B9] text-[#B2B5B9] text-xl form'
                    value={todos}
                    onChange={(e => setTodos(e.target.value))}
                    required
                />

                <button type="submit" className='bg-[#6E6256] text-[#B2B5B9] p-3 rounded cursor-pointer hover:bg-[#564840] duration-100 submit'>Add Task</button>
            </form>
        </>
    )
}

export default ToDoForm