import {useState} from 'react'

function App() {
let [count,setCount] = useState(0)

let  addValue = () =>{

 
  
   if(count<20){
    setCount(count +1)
  }
}
let  removeValue = () =>{  
  if(count>0){
    setCount(count-1 )
  }
}
  return (
    <div className="App">
   <h1>react aap</h1>
   <h4>counter :{count}</h4>
   <button onClick={addValue}> Add</button>
   <button onClick={removeValue}>Remove</button>
    </div>
  );
}

export default App;
