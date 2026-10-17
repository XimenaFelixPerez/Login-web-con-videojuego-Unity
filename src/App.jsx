import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Count from './components/Count'
import AppBar from './components/AppBar'
import ResponsiveAppBar from './components/AppBarMUI'
import Profile from './components/Profile'
import Game from './components/Game'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userId, setUserId] = useState(null)
  const login = async (user)=>{
    const res = await fetch("http://localhost:3000/login",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({Email: user.username, Password: user.password})
    })
    const data = await res.json()
    if(res.ok){
      setIsLogin(true)
      setUserId(data.user.Id)
      return {login:true}
    }
    setIsLogin(false)
    return {login:false}
  }
  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar />}
        {/* <AppBar /> */}
        <Routes>
          <Route path='/' element={<Login login={login} />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/count' element={<Count />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/game' element={<Game userId={userId} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
