import "./style.css"
import { useState } from "react"
// class in html = className
// components only allow 1 css tag wrapped around everything
// in this case we can wrap everything around fragments(<> </>)
// empty tag

// states to make stuff responsive
// useState is a hook from react
// states cannnot be changed
// we have to return a new state everytime
export default function App(){
 const[newItem,setNewItem]= useState("");
 const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    // to make sure that this can repeat, make setTodos into a function
    // if you want to use the current value, always pass it in a function
    setTodos(currentTodos=>{
      return [...currentTodos, {id: crypto.randomUUID(), title:newItem, completed:false}];
     });

     setNewItem("");
    // setTodos([...todos, {id: crypto.randomUUID(), title:newItem, completed:false}]);
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
  return <><form onSubmit={handleSubmit} className="new-item-form">
   
    <div className="form -row">
      <label htmlFor="item">New Item</label>
      <input value ={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  
  <ul className="list">
    {todos.map(todo=>{
      return  <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id,e.target.checked)}>
        </input>
        {todo.title}
      </label>
      <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
    })}

  </ul>
  </>
}