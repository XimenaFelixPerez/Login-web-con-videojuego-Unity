import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <div>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/count">Count</Link>
        {/* <a href="/">Login</a>
        <a href="/home">Home</a>
        <a href="/count">Count</a> */}
    </div>
  )
}

export default AppBar