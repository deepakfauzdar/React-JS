import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            text:"To Do Msg",
            checked:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(todo, id)=>{},
    deleteTodo:(id)=>{},
    checkedComplete:(id)=>{}
});

export const TodoContextProvider=TodoContext.Provider;



export default function useTodo(){
    return useContext(TodoContext)
}