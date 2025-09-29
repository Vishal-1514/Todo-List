import { act, useReducer } from "react";

export const ReducerHook=()=>{
    const reducer=(state,action)=>{
        if(action.type === "Increment"){
            return state+1;
        }
        if(action.type=== "Decrement"){
            return state-1;
        }
        if(action.type === "Reset"){
            return  (state=0);
        }

    };

    const [count,dispatch]=useReducer(reducer,0);
    return (
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type :"Increment"})}>Increment</button>
            <button onClick={()=>dispatch({type :"Decrement"})}>decrement</button>
            <button onClick={()=>dispatch({type :"Reset"})}>reset</button>
        </div>
        </>
    )
}