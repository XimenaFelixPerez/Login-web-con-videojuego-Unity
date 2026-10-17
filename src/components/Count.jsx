import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const add = ()=>{setCount(count+1)}
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add}>Add</button>
        <button onClick={()=>alert("hola")}>show</button>
    </div>
  )
}

export default Count