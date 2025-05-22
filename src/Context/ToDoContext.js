import React from "react";

export const ToDoContext = React.createContext({
    todos: [
        {
            id:1,
            todo: "Buy groceriess"
        }
    ],

    addToDo: (todo) => {},
    deleteTodo: (id) => {}
});

export const useTodo = () => {
    return React.useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;