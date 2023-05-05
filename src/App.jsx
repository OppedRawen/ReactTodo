import "./style.css"
import { useState } from "react"
// class in html = className
// components only allow 1 css tag wrapped around everything
// in this case we can wrap everything around fragments(<> </>)
// empty tag

// states to make stuff responsive
// useState is a hook from react
export default function App(){
 const[newItem,setNewItem]= useState("sdsdsd");

  return <><form className="new-item-form">
   
    <div className="form -row">
      <label htmlFor="item">New Item</label>
      <input value ={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox">
        </input>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox">
        </input>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
}