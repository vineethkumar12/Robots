
import './App.css'; 
 
import { App2 } from './App2';
import "./robots.css"
import "tachyons" 
import  Search  from './Search';
import { robots } from './robots';
import { useState } from 'react';
function App() { 
const [sea,setsea]=useState('')  
 
const handler=e=>{
  setsea(e.target.value)
  }  
 const a = robots.filter(robots=>{
    return  robots.name.toLowerCase().includes(sea.toLowerCase());
 }

) 

  return (
    <div className='tc' >  
       
       <h1>Robots</h1>
      <Search  handler={handler} value={sea}/>
    <App2  robots={a}/>
    

     
    </div>
  );
}

export default App;
