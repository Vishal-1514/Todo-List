
const todoKey="reactTodo";
export const getLocal=()=>{
    const rawTodo=localStorage.getItem(todoKey);

       if (!rawTodo || rawTodo === 'undefined' || rawTodo === 'null') return [];

        return JSON.parse(rawTodo);
}

export const setLocal=(inpTask)=>{
    return localStorage.setItem(todoKey,JSON.stringify(inpTask));
    
}