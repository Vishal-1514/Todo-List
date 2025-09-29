import { useState } from 'react'
import './FormChall.css'
export const FormChall=()=>{
    const [user,setUser]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:""
    })
    const handleInput=(event)=>{
        const {name,value}=event.target;
        setUser((prev)=>({...prev,[name]:value}))

    }
    const handleSubmit=(event)=>{
        event.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit} className='Form-box'>
            <div className="box">
                <h1 className='h1'>Sing Up</h1>
                <label className='text1' htmlFor="FirstName">
                    <b>FirstName</b>
                </label>
                <input className='input1' type="text" 
                      placeholder="Enter firstName"
                      name="FirstName"
                      required
                      value={user.FirstName}
                      onChange={handleInput}

                />

                <label className='text1' htmlFor="LastName">
                    <b>LastName</b>
                </label>
                <input className='input1' type="text" 
                      placeholder="Enter LastName"
                      name="LastName"
                      required
                      value={user.LastName}
                      onChange={handleInput}

                />


                <label className='text1' htmlFor="Email">
                    <b>Email</b>
                </label>
                <input className='input1' type="Email" 
                      placeholder="Enter Email"
                      name="Email"
                      required
                      value={user.Email}
                      onChange={handleInput}

                />
                <label className='text1' htmlFor="Password">
                    <b>Password</b>
                </label>
                <input className='input1' type="password" 
                      placeholder="Enter Password"
                      name="Password"
                      required
                      value={user.Password}
                      onChange={handleInput}

                />

                
              <div>
                <button type='submit' className='btn'>Sing Up</button>
              </div>
                

            </div>
        </form>
    )
}