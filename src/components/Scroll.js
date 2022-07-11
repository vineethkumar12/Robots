import React from 'react'

export const Scroll = (props) => {
  return (
    <div style={{overflowY: "scroll", border:"3px solid black" ,height:"500px"}}> 

        {props.children}
        
        
    </div>
  )
}
