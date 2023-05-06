import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo,deleteTodo}){

    return( 
        <ul className="list">
          {/* this is called short circuiting, which means if the first statement is true, it would render the second statement */}
          {todos.length===0&&"No Todos"}
          {todos.map(todo=>{
            return  (<TodoItem id={todo.id}completed={todo.com} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
        
          })}
      
        </ul>);
}