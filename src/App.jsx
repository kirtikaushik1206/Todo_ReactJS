
import './App.css'
import { Navbar } from './components/Navbar'
import { useState } from 'react'
function App() {
  
const [todo, setTodo] = useState("") //input text
const [todos, setTodos] = useState([])  //array of all the todos


const handleEdit = () =>{

}

const handleDelete = () =>{

}

const handleAdd = () =>{
  setTodos([...todos, todo]);
  setTodo("");
}
const handleChange = (e) =>{
  setTodo(e.target.value);
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
  {todos.map((item) => (
    <div key={item} className="todo flex">
      <div className='text'>{item}</div>
      <div className='buttons'>
        <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white py-1 px-2 rounded-md p-2 mx-1'>edit</button>
        <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white py-1 px-2 rounded-md p-2 mx-1'>Delete</button>
      </div>
    </div>
  ))}
</div>







    </div>






    </>
  )
}

export default App
