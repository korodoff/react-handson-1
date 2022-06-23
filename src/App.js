
// import './App.css';
import FunctionComponent from "./component/functionComponent";
import React, {useState} from "react";
import ClassComponent from "./component/classComponent";
import "./component/style.css"




function App() {
  
  const [show, setShow] = useState(false)
  const[showSecond, setShowSecond] = useState(false)


  return (
    <div className="App">
      <h3>styling using functional and class component</h3>
      <div className="flex">
        
         <div className="both" onClick={()=>setShow(!show)}>to style using function component</div>
         <div className='class both' onClick={()=>setShowSecond(!showSecond) }>to see style usnig class component</div>
      </div>
      <div className="functiontoggle">
          {
            show?<div className="togglefirst">
              <FunctionComponent/>  
            </div>:null  }
            
            {
            showSecond?<div className="togglefirst">
              <ClassComponent/>
            </div>:null  }
        </div>       
    
      
     
    </div>
  );
    
}

export default App;