import "./style.css"
// class in html = className
// components only allow 1 css tag wrapped around everything
// in this case we can wrap everything around fragments(<> </>)
// empty tag

// states to make stuff responsive
export default function App(){
  return <><form className="new-item-form">
   
    <div className="form -row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"></input>
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