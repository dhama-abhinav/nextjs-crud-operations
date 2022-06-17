import React from 'react'
import db from '../firebase'
export const ListComponent = (props) => {

    
  return (
    <div  className='flex items-center justify-around mb-3'>
          <li >{props.todo.todo}</li>
          <button
          onClick={(e)=> db.collection('todos').doc(props.todo.id).delete()}
          className='bg-red-600 text-white p-2 rounded-md'
          >Delete me</button>
    </div>
  )
}
