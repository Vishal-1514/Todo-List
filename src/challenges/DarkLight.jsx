import { createContext, use, useState } from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [Theme,setTheme]=useState('dark');
    const handleToggle=()=>{
        return setTheme((prev)=>(prev==="dark" ? "light" : "dark"))
    }
    return <ThemeContext.Provider value={{Theme,handleToggle}}>{children}</ThemeContext.Provider>
}

export const DarkLight=()=>{
    const {Theme,handleToggle}=use(ThemeContext);
    return (
        <div className={`p-4 h-lvh flex flex-col justify-center items-center ${Theme=== "dark" ? "bg-gray-800" : "bg-white"} `}>
            <h1 className={`my-4 text-xl ${Theme === "light" ? "text-gray-800" : "text-white"}`}>Dark Light Mode web site</h1>
            <p className={`my-4 text-xl ${Theme === "light" ? "text-gray-800" : "text-white"}`}>hello ji</p>
            <button onClick={handleToggle} className="bg-blue-500 hover-bg-blue-600 text-white rounded-md mt-4 p-4">
                { Theme==="dark" ? "switch to light mode" : "switch to dark mode"}</button>
        </div>
    )
}