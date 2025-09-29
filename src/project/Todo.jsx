import { useEffect, useState } from 'react'
import { MdCheck ,MdDelete } from "react-icons/md";
import './Todo.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoTime } from './TodoTime';
import { getLocal, setLocal } from './TodoLocal';


export const Todo =()=>{
    
    const [inpTask,setTask]=useState(()=>getLocal());
   
    

    
    const handleFormSubmit=(inputValue)=>{
        const {id,content,checked}=inputValue;
     if(!content) return;
    
     const ifTodoMatched=inpTask.find((curTask)=> curTask.content===content);
     if(ifTodoMatched) return;
    setTask((prevTask)=>[...prevTask,{id,content,checked}]);   
    }
    //todo date and time

    //todo storage
    setLocal(inpTask)
   
   //delete button
   const handleDelete=(val)=>{
      
       const updated=inpTask.filter((curTask)=>curTask.content!==val);
       setTask(updated);
   }
   //clear button
   const handleClear=()=>{
      setTask([]);
   }

   const handleChedked=(content)=>{
       const updatedData=inpTask.map((curTask)=>{
        if(curTask.content === content){
            return {...curTask,checked:!curTask.checked}
        }else{
            return curTask;
        }
       })
      setTask(updatedData);
   }

    
    return ( 
        <div className='all-all'>
        
    <section className='all '>
        <header className='header'>
            <h1 className='h1'>Todo List</h1>
            <TodoTime/>
        </header>
       <TodoForm onAddTodo={handleFormSubmit}/>
        <section>
            <ul className='unorder'>
                {
                    inpTask.map((curTask)=>{
                        return <TodoList key={curTask.id} data={curTask.content} handleDelete={handleDelete}
                        checked={curTask.checked}
                        onHandleChecked={handleChedked}/>
                    })
                }
            </ul>
        </section>
        <section>
            <button className='clear' onClick={handleClear}>Clear All</button>
        </section>
    </section>
    </div>
    
    )
}