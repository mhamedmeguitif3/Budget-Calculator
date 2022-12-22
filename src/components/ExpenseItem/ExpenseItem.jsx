import React from 'react'
import { MdEdit , MdDelete} from 'react-icons/md'

const ExpenseItem = ({expence , handelDelete , handelEdit }) => {
const {id , charge , amount } =  expence 

    return (
        <li className='item'>
        <div className='info'>
               <span className='expense'>{charge}</span>
               <span className='amount'>${amount}</span>
        </div>
        <div>
            <button className='edit-btn' aria-label="edit button" onClick={()=>handelEdit(id)}> <MdEdit/></button>
        </div>
        <div>
            <button className='clear-btn' aria-label="delete button" onClick={()=>handelDelete(id)}> <MdDelete/></button>
        </div>
        </li>
    )
 }
export default ExpenseItem
 