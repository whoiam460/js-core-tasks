
import './App.css';
import {useState} from 'react'

function App() {

  const[data, setData]= useState("")
  console.log(data);
  const btn =[];
  
  [9,8,7,6,5,4,3,2,1,0,',','%',].forEach(element => {
    btn.push(
      <button onClick ={e =>{
        setData(data + e.target.value)
      }}
      value ={element}
      key = {element}>
        {element}
      </button>
    ) 
  });
  return (
    <div className="wrapper">
      <div className = "show-input">
        {data}
      </div>
      <div className= "digits flex">{btn}</div>
      <div className="modifiers subgrid">
          <button onClick ={()=> setData( data.substr(0, data.length - 1))}>
            clear
          </button>
          <button onClick = { () => setData("")}>ac</button>
      </div>
      
      <div className="operations subgrid">
          <button onClick ={(e) => setData( data + e.target.value)} value ="+">+</button>
          <button onClick ={(e) => setData( data + e.target.value)}  value ="-">-</button>
          <button onClick ={(e) => setData( data + e.target.value)}  value ="*">*</button>
          <button onClick ={(e) => setData( data + e.target.value)}  value ="/">/</button>
          <button onClick ={(e) => setData( eval(data))} value ="=">=</button>
      </div>     
    </div>
  );
}

export default App;
