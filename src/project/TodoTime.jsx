import { useEffect, useState } from "react";

export const TodoTime=()=>{
     const [TimeDate,setTime]=useState("");

    useEffect(()=>{
     const interval=setInterval(()=>{
       const now=new Date();
    const formatedate=now.toLocaleDateString();
    const formateTime=now.toLocaleTimeString();
    setTime(`${formatedate}-${formateTime}`);

    },1000);

    return ()=>clearInterval(interval);
   })
    return (
        <h2 className='date-time'>{TimeDate}</h2>
    )
}