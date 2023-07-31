import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item, removeItem}) => {
  const onDelete = ()=>{
      
  }
  return(
    
    
    <>
    {item.map((i)=>{
        const {id, title} = i
        return <article className='grocery-item' key={id}>
          <p className='title'>{title}</p>
          <div className='btn-container'>
            {/* <button className='edit-btn' type='button'><FaEdit/></button> */}
            <button className='delete-btn' type='button' onClick={()=>removeItem(id)}><FaTrash/></button>
          </div>
  
        </article>
        
        
    })}
    </>
  )
}

export default List
