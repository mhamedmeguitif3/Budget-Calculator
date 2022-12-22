import React from 'react'
import { MdSend  } from 'react-icons/md'

 const ExpenseForm = ({
    charge,
    amount, 
    handelCharge,
    handelAmount, 
    handelSubmit, 
    edit}) => {
  return (
    <form onSubmit={handelSubmit} >
       <div className='form-center'>
        <div className='form-group'>
              <label htmlFor="charge">charge</label>
              <input 
              type="text" 
              className='form-control' 
              id='charge' 
              name='charge'
              placeholder='e.g rent'
              value={charge}
              onChange={handelCharge}/> 
        </div>
        <div className='form-group'>
              <label htmlFor="amount">amount</label>
              <input 
              type="number" 
              className='form-control'
              id='amount' 
              name='amount'
              placeholder='e.g 500'
              value={amount}
              onChange={handelAmount}
              /> 
        </div>

        
        
       </div>
       <button type="submit" className='btn'>
        {edit ? "edit"  : "submit"
        }
         
        <MdSend className='btn-icon'/>
        </button>
    </form>
  )
}
export default ExpenseForm