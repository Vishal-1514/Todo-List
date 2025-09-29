import { useEffect, useState } from "react";

export const pokemonData=()=>{
    const [pokemon,setPokemon]=useState(null);
     const API="https://pokeapi.co/api/v2/pokemon/pikachu"
      const fetchApi=async()=>{
             try{
                 const res=await fetch(API);
                 const data=await res.json();
                 setPokemon(data); 
                 
             }catch(error){
                 console.log(error)
                          
                 
             }
          }                 
     
         useEffect(()=>{
             fetchApi();
         },[])
         
}