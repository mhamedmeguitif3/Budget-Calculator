import React from 'react'
import Item from '../ExpenseItem/ExpenseItem'; 
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expences , clearItems , handelDelete ,handelEdit }) => {
  return (
    <>
    <ul className='list'>
        {expences.map((expence)=>{
            return <Item key={expence.id}  expence = {expence}  
            handelDelete = {handelDelete}
          handelEdit = {handelEdit}/>
        })}
    </ul> 
      {expences.length > 0 &&(  
      <button className='btn' onClick={clearItems}>
        clear expences 
      <MdDelete className='btn-icon' />
      </button>)}
    </>
  )
}
export default ExpenseList 
