import firebase from 'firebase'
import type { NextPage } from 'next'
import { delBasePath } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {ListComponent} from '../components/ListComponent'
import db from '../firebase'

const Home: NextPage = () => {
  //sate
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])

  //when app load, want to listen to DB
  useEffect( ()=>{

    db.collection("todos").orderBy('timestamp','desc').onSnapshot( snapshot => {
      console.log("DDD",snapshot.docs.map( doc => ({ id:doc.id ,todo:doc.data().todo})))
      setTodos(snapshot.docs.map( doc => ({ id:doc.id ,todo:doc.data().todo})))
    })
  },[])

  //handleclick
  const addData = (e)=>{
    e.preventDefault()
    db.collection('todos').add({
      todo : input,
      timestamp :firebase.firestore.FieldValue.serverTimestamp()
      //can add timestamp also as  firestore will provie timestamp
    })
    console.log("click working")
    setTodos( [...todos,input])
    //to make input field empty after data entered
    setInput("")
  }
  return (
    <div className="p-5"> 
      <Head>
        <title>my curd app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hii, CURD app goes here...</h1>
     <br />
      <form >
        <input 
        className='outline-none bg-slate-100 p-4'
        value={input}
        placeholder='Type here...'
        onChange={ (e)=> setInput(e.target.value)}
        type="text" />
        <button
        disabled={!input}
        className='bg-black text-white p-2 rounded-md cursor-pointer ml-5'
         type='submit' onClick={addData}>
          Add data
        </button>
      </form>
      <br />
      <br />
      {/* data goes here */}
      {
        todos.map( (todo)=>(
          <div key={todo.id}>
            <ListComponent todo={todo} />
            </div>
          
        ))
      }
      
    </div>
  )
}

export default Home
