
import './App.css'; 
 
import { App2 } from './App2';
import "./robots.css"
import "tachyons"
import { robots } from './robots';
function App() {
  return (
    <div  > 
    <App2  robots={robots}/>
    

     
    </div>
  );
}

export default App;
