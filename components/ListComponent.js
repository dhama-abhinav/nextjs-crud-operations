import React from 'react'
import db from '../firebase'
export const ListComponent = ({text}) => {

    //for deleting data from DB
    const deleteData =()=>{
        db.collection('todos').doc(text.todo.id).delete()
    }
  return (
    <div  className='flex items-center justify-around mb-3'>
          <li >{text.todo}</li>
          <button
          onClick={deleteData}
          className='bg-red-600 text-white p-2 rounded-md'
          >Delete me</button>
    </div>
  )
}
