import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isediting, setEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert]= useState({show:false, msg:' ', type:'danger'})
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(!name){
      setAlert({show:true, msg:'Please provide a task', type:'danger'})
      console.log(alert)
    }
    else if( name){
      const newItem = {title:name, id:new Date().getTime().toString()}
      setList([...list, newItem])
      setAlert({show:true, msg:'New task created', type:'success'})
      console.log(list)
      setName('')
    
    } 
  }
    const removeItem = (id)=>{
    setAlert({show:true, msg:'Your task has been deleted', type:'danger'})
    setList(list.filter((item)=>item.id !== id))
}
  return (
    <>
    
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert msg={alert.msg} type={alert.type}/>}
        <h3>Todo List</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='eg:Drink Water' value={name} onChange={(e)=> setName(e.target.value)}></input>
          <button type='submit' className='submit-btn'>
            {isediting ? 'edit': 'sumbit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List item={list} removeItem={removeItem}/>
        {list.length > 0 ? <button className='clear-btn' onClick={()=>{
          setList([])
          setAlert({show:false})}
          }>clear Items</button>: null}
      </div>
      
    </section>
    </>
  )
}

export default App
