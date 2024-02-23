import React, { useState } from 'react'
import axios from 'axios'


const TodoForm = ({setTodos, fetchData}) => {

  const [newTodo, setNewTodo] = useState({
    'item': ''
  })

  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      item: e.target.value
    }))
    console.log(newTodo);
  }

  const postTodo = async() => {
    try{
      await axios.post('http://127.0.0.1:8000/api/todo/' , newTodo )
      setNewTodo( {'item':''} );
      fetchData()
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <input type="text" placeholder="Add Todo" className="input input-bordered input-info w-full max-w-xs" 
      onChange={handleChange} value={newTodo.item}
      onKeyDown={(e) => {
        if(e.key === "Enter"){
          postTodo()
        }
      }}
      />
      <button className="btn btn-primary ml-2" onClick={postTodo}>Add Item</button>
    </div>
  )
}

export default TodoForm
