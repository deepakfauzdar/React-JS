import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './Contexts/TodoContext'
import ToDoForm from './Components/ToDoForm';
import ToDoItem from './Components/ToDoItem';

function App() {  
  const [todos, setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prevTodo)=>[{id:Date.now(),...todo},...prevTodo])
  }

  const deleteTodo=(id)=>{
    setTodos( (prevTodo)=>prevTodo.filter( (item)=>item.id!=id))
  }

const editTodo=(todo, id)=>{
  setTodos( (prevTodo)=>prevTodo.map( (item)=>item.id===id? todo: item))
}

const checkedComplete=(id)=>{
  setTodos( (prevTodo)=> prevTodo.map( (item)=>item.id===id? ({...item,checked:!item.checked}):item))
}

  return (
    <TodoContextProvider value={ {todos,addTodo,deleteTodo,editTodo,checkedComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <ToDoForm />
                       
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop andd Add TodoItem here */}
                      {todos.map( (item)=>{
                        console.log(item);
                        return (                          
                            <div key={item.id} className='w-full'>
                              <ToDoItem todo={item}/>
                            </div>
                        )
                      })}
                    </div>
                </div>
            </div>
</TodoContextProvider>
  )
 
}

export default App
