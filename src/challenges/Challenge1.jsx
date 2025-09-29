import { useState } from 'react'
import './Challenge1.css'

export const Challenge1=()=>{
    const [inputValue,setValue]=useState(0);
    const [count,setCount]=useState(0);
    const handleInputChange=(value)=>{
         setValue(value)
    }
    const handleIncrement=()=>{
        setCount(count+inputValue)
    }
    const handleDecrement=()=>{
        setCount(count-inputValue)
    }
    const handleReset=()=>{
        setCount(0);
        setValue(0);
    }
    return (
        <div className='first'>
            <h1 className='h1'>useState Challenge</h1>
            <div className='third'>
             
             <span className='text'>Count :{count}</span>
            <div className='second'>
                <h3 className='text'>Step :</h3>
                <input type="Number" className='input-box' autoComplete='off' value={inputValue} onChange={(event)=>handleInputChange(Number(event.target.value))}/>
            </div>
            </div>
            <div className='fourth'>
                <button className='btn text' onClick={handleIncrement} disabled={count>=100}>Increment</button>
                <button className='btn text' onClick={handleDecrement} disabled={count <=0}>Decrement</button>
                <button className='btn text' onClick={handleReset}>Reset</button>
            </div>
            
        </div>
    )
}