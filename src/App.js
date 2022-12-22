import {useState , useEffect} from 'react'
import './App.css';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import Alert from './components/Alert/Alert';
import { v4 as uuidv4 } from 'uuid'



//const initialExpences = [
  //{id:uuidv4(), charge:"rent", amount : 1600}, 
  //{id:uuidv4(), charge:"car patyment", amount : 4600}, 
  //{id:uuidv4(), charge:"credit card bill ", amount : 1200}
//]
const initialExpences = localStorage.getItem("expences") ? JSON.parse(localStorage.getItem("expences")) : []  
function App() {
  //************* state values ****************
  //all expences , add expence 
  const [expences , setExpences] = useState(initialExpences) 
  // single expence 
  const [charge , setCharge] =  useState('')
  // single amount  
  const [amount , setAmount] =  useState('')
  //Alert 
  const [alert , setAlert] = useState({show:false})
  //edit
  const [edit , setEdit] = useState(false) 
  //edit item 
  const [id , setId] = useState(0)  
  //************* UseEffect   ****************
  useEffect(()=>{

    localStorage.setItem("expences", JSON.stringify(expences))
  } , [expences])

  //************* functionalty  ****************
  //handel Charge  
  const handelCharge = e => {
    setCharge(e.target.value)
  }
  //handel Amount  
  const handelAmount = e => {
    setAmount(e.target.value)
  }
  //handel Alert 
  const handelAlert = ({type , text })=>{
        setAlert({show:true , type , text })
        setTimeout(()=>{
            setAlert({show:false})
        },3000)
  }

   //handel Submit 
  const handelSubmit = (e)=>{
    e.preventDefault(); 
    if (charge !== "" && amount > 0){
      if(edit){
          let tempExpenses = expences.map(item=>{
            return item.id === id ?  {...item,charge,amount}:
             item 
          })
          setExpences(tempExpenses) 
          setEdit(false)
          handelAlert({type:'success' , text:'item Edited Successfully '})
      }else{
        const singleExpense = {
          id : uuidv4() , 
          amount  , 
          charge  
        }
        setExpences([...expences,singleExpense])
        handelAlert({type:'success' , text:'item added'})
      }
      setAmount('')
      setCharge('')
     
    }else {
      // Handel Alert Call 
      handelAlert({type:'danger' , text:"charge can't be empty value and amount has to be grater thean 0"})

    }
  }
  // clear all items 
  const clearItems = ()=>{
  setExpences([])  
  }
  // handel delete 
  const handelDelete = (id)=>{
    setExpences(expences.filter(item=> item.id !== id ))
    handelAlert({type:'danger' , text:'Item deleted '})
  }
   // handel Edit 
   const handelEdit = (id)=>{
    console.log(`Item Edited  ${id}`);
    let expense  = expences.find(item => item.id === id) 
    let {charge , amount} =  expense
    setAmount(amount)
    setCharge(charge)

    setEdit(true)
    setId(id)
    console.log(expense)
   } 
  return ( 
   <>
      {alert.show &&  <Alert type ={alert.type} text={alert.text}/>}
     
      <h1>budget calculator </h1>
      <main className='App'>
        <ExpenseForm charge = {charge} 
          amount= {amount}
          handelAmount={handelAmount}
         handelCharge={handelCharge} 
         handelSubmit={handelSubmit} 
         edit = {edit}/>
        <ExpenseList expences = {expences} 
          handelDelete = {handelDelete}
          handelEdit = {handelEdit}
         clearItems = {clearItems}/>
      </main>
      <h1>
        total spending : <span className='total'>
          $ {expences.reduce((acc,curr)=>{
            return acc +=parseInt(curr.amount) 
          },0)}
        </span>
      </h1>
      <div className='author'>
        <div className='author-info'>
        created with  &#128151; By M.Meg
        </div>
        </div>
      
   </>
  );
}

export default App;
