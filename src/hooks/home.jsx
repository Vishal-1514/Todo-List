import { createContext, useEffect, useState } from "react";
import { pokemonData } from "./pokemonData";

export const BioContext=createContext();

export const BioProvider=({children})=>{
     const pokemon=<pokemonData/>

    const myname="vinod";
    return <BioContext.Provider value={pokemon}> {children}</BioContext.Provider>
}