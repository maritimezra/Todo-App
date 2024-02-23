import axios from 'axios';
import React, { useState } from 'react'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

const Table = ( {todos, setTodos, isLoading} ) => {

  const [editText, setEditText] = useState ({
    'item': ''
  })

  const handleDelete = async (id) => {
    try{
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`)
      const newList  = todos.filter( todo => todo.id !== id )
      setTodos(newList)

    } catch (error){
      console.log(error);
    }
    
  }

  const handleEdit = async  (id, value) => {
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/api/todo/${id}/`, value)
      const newTodos = todos.map( todo => todo.id === id ? response.data : todo )
      setTodos(newTodos)
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckbox = (id, value) => {
    handleEdit(id,  {...value, completed: !value.completed})
  }

  const handleChange = (e) => {
    setEditText(prev => ({ 
      ...prev , 
      'item': e.target.value 
    }))
    console.log(editText)
  }

  const handleEditclick  = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'item': ''
    })
  }




  return (
    <div className=' py-2'>
      <table className=' w-11/12 max-w-4xl'>
        <thead className=' border-b-2 border-black'>
          <tr>
            <th className=' p-3 text-sm tracking-wide text-left'>Checkbox</th>
            <th className=' p-3 text-sm tracking-wide text-left'>To  Do</th>
            <th className=' p-3 text-sm tracking-wide text-left'>Status</th>
            <th className=' p-3 text-sm tracking-wide text-left'>Date Created</th>
            <th className=' p-3 text-sm tracking-wide text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
        {isLoading ? <div> Is loading</div>:
        <>
        {  todos.map( (todoItem, index) =>{
            return (
              <tr className=' key={todoItem.id} border-black'>
                <td className=' p-3' title={todoItem.id}>
                  <span onClick={() => {handleCheckbox(todoItem.id, todoItem)}}
                  className=' inline-block cursor-pointer'>{todoItem.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</span>
                </td>
                <td className=' p-3 text-sm'>{todoItem.item}</td>
                <td className=' p-3 text-sm text-center'>
                  <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'} `} >
                    {todoItem.completed ? 'Done' : 'Incomplete'}
                  </span>
                </td>
                <td className=' p-3 text-sm'>{ new Date(todoItem.created).toLocaleString()}</td>
                <td className=' p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                  <span className=' text-xl cursor-pointer'>
                  <label htmlFor="my_modal_6" className="btn"><MdEditNote onClick={() => setEditText(todoItem)} /></label>
                  </span>
                  <span className=' text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={ ()=>handleDelete(todoItem.id)} /></span>
                </td>
              </tr>
            )
          } )
        
          }
        </>
          }
        </tbody>
      </table>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Todo</h3>
          <input type="text" value={editText.item}  onChange={handleChange} className="input input-bordered w-full mt-8 " />
          <div className="modal-action">
          <label htmlFor="my_modal_6" onClick={handleEditclick} className="btn btn-primary">Edit</label>
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
