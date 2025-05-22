import { useTodo } from '../Context/ToDoContext'

const ToDoItems = ({ todo }) => {

    const { deleteToDo } = useTodo()


    return (
        <>
            <div className='flex justify-between p-4 mb-5 border border-gray-300 rounded addedTask'>
                <div className='text-[#B2B5B9] text-xl addedText'>
                    <p>{todo.text}</p>
                </div>
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteToDo(todo.id)}
                >
                    ❌
                </button>
            </div>
        </>
    )
}

export default ToDoItems