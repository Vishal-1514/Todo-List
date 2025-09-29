import { useContext } from "react"
import { BioContext } from "./home"

export const Context=()=>{

    const pokemon=useContext(BioContext);
    console.log(pokemon)
    return (
        <>
        <h1>hello</h1>
        <h1>dkjd</h1>
        </>
        
    )
}