import { useState } from "react"
import React from 'react'
import { useContext } from "react"
import UserContext from "../context/UserContext"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      Login
      <input type="text"
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username" />
      <input type="password" 
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password" />
      <button onClick={ handleSubmit }> Submit </button>
    </div>
  )
}

export default Login
