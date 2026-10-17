import React from 'react'

const Game = ({userId}) => {
  if(!userId){
    return <p>Inicia sesión primero</p>
  }
  return (
  <>
    {/*
      ruta get: http://localhost:3000/game/user_id
      body: {name, points}
      ruta put: http://localhost:3000/game/user_id
      body: {points}
    */}
    <div style={{display:"flex", justifyContent:"center", marginTop:"16px"}}>
      <iframe
        src={`/unity/index.html?user_id=${userId}`}
        title="Juego"
        width="980"
        height="670"
        scrolling="no"
        style={{border:"none"}}
      />
    </div>
  </>
  )
}

export default Game