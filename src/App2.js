import React from 'react'
import R2 from "./R2"
export const App2 = ({robots}) => { 
   const component=robots.map((user,i)=>{
   return <R2 name={robots[i].name} email={robots[i].email} id={robots[i].id}/> 


   }


   )


  return (
    <div>{ component}</div>
  )
}
