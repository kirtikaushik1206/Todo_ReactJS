
import './App.css'
import { Navbar } from './components/Navbar'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



function App() {
  
const [todo, setTodo] = useState("") //input text
const [todos, setTodos] = useState([])  //array of all the todos


const handleEdit = () =>{

}

const handleDelete = () =>{

}




const handleAdd = () =>{
  setTodos([...todos, { id:uuidv4(), todo, isCompleted:false}]);
  setTodo("");
}
const handleChange = (e) =>{
  setTodo(e.target.value);
}

const handleCheckbox = (e) => {
 let id = e.target.name;
 let index=todos.findIndex(item=>{
  return item.id==id;
  
 })
let newTodos= [...todos];
newTodos[index].isCompleted = !newTodos[index].isCompleted;
setTodos(newTodos);

}


  return (
    <>
    
      
    <Navbar/>
    <div className='bg-violet-100 container mx-auto my-5 rounded-2xl p-5 min-h-[80vh]'>

    <div className='AddTodo'>
      <h1 className='text-lg font-bold'>Add a TODO</h1>
      <input onChange={handleChange} value={todo} type='text'  className='w-80 bg-white'/>
      <button onClick={handleAdd}className='bg-violet-800  hover:bg-violet-950 text-sm font-bold text-white py-1 px-2 rounded-md p-2 mx-6' >add</button>
    </div>
<h2 className='text-lg font-bold my-5'>Your Todos</h2>


<div className="todos">
  {todos.map(item =>{


 
  return   <div key={item.id} className="todo flex w=1/4 my-4 justify-between">
    <input onChange={handleCheckbox} type="checkbox" name={item.id} checked= {item.isCompleted}  id="" />
      <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
      <div className='buttons'>
        <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white py-1 px-2 rounded-md p-2 mx-1'>edit</button>
        <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white py-1 px-2 rounded-md p-2 mx-1'>Delete</button>
      </div>
    </div>
     })}

</div>







    </div>






    </>
  )
}

export default App
