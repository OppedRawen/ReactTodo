import {useState} from 'react'
export function NewTodoForm(props){

    const[newItem,setNewItem]= useState("");
 
    function handleSubmit(e){
        e.preventDefault();
        // to make sure that this can repeat, make setTodos into a function
        // if you want to use the current value, always pass it in a function
        if(newItem==="")return;
        props.onSubmit(newItem);
    
         setNewItem("");
        // setTodos([...todos, {id: crypto.randomUUID(), title:newItem, completed:false}]);
      }
   return (<form onSubmit={handleSubmit} className="new-item-form">
   
    <div className="form -row">
      <label htmlFor="item">New Item</label>
      <input value ={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>);
}