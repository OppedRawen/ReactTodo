import "./style.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
// class in html = className
// components only allow 1 css tag wrapped around everything
// in this case we can wrap everything around fragments(<> </>)
// empty tag

// states to make stuff responsive
// useState is a hook from react
// states cannnot be changed
// we have to return a new state everytime

// useEffect hook store everything into locastorage
export default function App(){

 const [todos, setTodos] = useState(()=>{
  const localValue = localStorage.getItem("ITEMS");
  if(localValue==null) return [];
  return JSON.parse(localValue)
 });
useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos));
},[todos])
 function addTodo(title){
  setTodos(currentTodos=>{
    return [...currentTodos, {id: crypto.randomUUID(), title, completed:false}];
   });
 }
 
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id ===id){
          return {...todo,completed}
        }
        return todo;
      })
    })
  }
function deleteTodo(id){
  setTodos(currentTodos=>{
    return currentTodos.filter(todo=>todo.id!==id);
  })
}

  // to loop through stuff in react html, we need to use a map
  // we have to give a key to every element in react that we loop through to know whcih one we change
 console.log(todos);
  return <>
  {/* pass in props */}
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
 <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
}