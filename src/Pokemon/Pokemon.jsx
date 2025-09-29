import { useEffect, useState } from "react"
import './Pokemon.css'

export const Pokemon=()=>{
    const [pokemon,setPokemon]=useState(null);
    const [loading,setLoading]=useState(true);
    const API="https://pokeapi.co/api/v2/pokemon/pikachu"

    // const fetchApi=()=>{
    //     fetch(API).then((res)=>res.json()
    // ).then((data)=>{ setPokemon(data); 
    //     setLoading(false)}
    // ).catch((error)=>{console.log(error)
    //                   setLoading(false)})}

     const fetchApi=async()=>{
        try{
            const res=await fetch(API);
            const data=await res.json();
            setPokemon(data); 
            setLoading(false)
        }catch(error){
            console.log(error)
                     setLoading(false)
            
        }
     }                 

    useEffect(()=>{
        fetchApi();
    },[])
    console.log(pokemon)
    
    if(loading){
        return(
            <h1>loading.......</h1>
        );
    }
    
    return (
        <section className="body ">
            <header>
                <h1 className="h1  font-bold ">Lets catch the pokemon</h1>
            </header>
            <li className="block ">
                <figure>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                   
                </figure>
                <h1 className="h2">{pokemon.name}</h1>
                
                    <div className="power">
                    <p className="p ">
                        Height:<span>{pokemon.height}</span>
                    </p>
                    <p className="p ">
                        Weight:<span>{pokemon.weight}</span>
                    </p>
                    <p className="p ">
                        Speed:<span>{pokemon.stats[5].base_stat}</span>
                    </p>
                    </div>
                
            </li>
        </section>
    )
}

