import React from 'react'
import {GiAbdominalArmor} from 'react-icons/gi'

function Task({ts,onClick}){

  return (
    <div style={{background:"grey"}}>
        <h2>{ts.text} <GiAbdominalArmor style={{color:'red'}} onClick={()=>onClick(ts.id)}/></h2>
      
    </div>
  )
}

export default Task
