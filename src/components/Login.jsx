import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({login}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onsubmit = async (e)=>{
    e.preventDefault()
    if(!username){
      alert("username no debe estar vacio")
    }
    if(!password){
      alert("password no debe estar vacio")
    }
    const user = {username, password}
    const data = await login(user)
    if(data.login === true){
      navigate("/home")
    }
  }
  return (
    <form onSubmit={onsubmit}>
      <TextField value={username} label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)} />
      <TextField value={password} label="Password" variant="outlined" type='password' onChange={(e)=>setPassword(e.target.value)} />
      <Button type='submit' variant="contained" >Login</Button>
    </form>
  )
}

export default Login