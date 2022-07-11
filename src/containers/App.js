

 import "../App.css"
import { App2 } from '../containers/App2';
import "../robots.css"
import "tachyons" 
import  Search  from '../components/Search';

import { useEffect, useState } from 'react';
import axios from "axios";
function App() { 
const [sea,setsea]=useState('')   
const [robots,setrobots]=useState([]);

useEffect(()=>{ axios.get('https://jsonplaceholder.typicode.com/users').then(users=>setrobots( users.data));
},[])

const handler=e=>{
  setsea(e.target.value)
  }  
 const a = robots.filter(robots=>{
    return  robots.name.toLowerCase().includes(sea.toLowerCase());
 }

)   
  return !robots.length ?
  <h1>Loading</h1>:
 
   ( <div className='tc' >  
       
       <h1 className="f1">Robots</h1>
      <Search  handler={handler} value={sea}/>
    
      <div style={{overflowY: "scroll", border:"3px solid black" ,height:"500px"}} >
    <App2  robots={a}/> 
    </div>
    
    

     
    </div>
  );
}

export default App;
