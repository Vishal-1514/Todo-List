import { useState } from "react";
import './Todo.css'

export const TodoForm=({onAddTodo})=>{
    const [inputValue,setInput]=useState({});

    const handleInputChange=(value)=>{
        setInput({id:value,content:value,checked:false});

    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInput({id:"",content:"",checked:false});

    }
    return (
         <section className='form-sec'>
                    <form className='form' onSubmit={handleFormSubmit}>
                        <div>
                            <input className='input-box' type="text "  autoComplete="off" value={inputValue.content} onChange={(event)=>handleInputChange(event.target.value)}/>
                        </div>
                        <div>
                            <button className='sub-btn' type="submit">Add Task</button>
                        </div>
                    </form>
                </section>
    )
}