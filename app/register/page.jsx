"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { Context } from '@/components/Clients'
import toast from 'react-hot-toast'
import {redirect} from "next/navigation"

const Page = () => {

  
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const {user, setUser} = useContext(Context)

  const registerHandler = async (e) =>{
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      const data = await res.json()
      if(!data.success) return toast.error(data.message)
      setUser(data.user)
      toast.success(data.message)
      
    } catch (error) {
      return toast.error(error)
    }

  }

  if(user._id) return redirect("/")
  return (
    <div className='login'>
    <section>
      <form onSubmit={registerHandler}>
          <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Name' />
          <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter your email'/>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter your password'/>
          
          <button type="submit">Sign Up</button>

          <p>OR</p>
          <Link href={"/login"}>Log In</Link>
      </form>
    </section>
  </div>
  )
}




export default Page
