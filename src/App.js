import { useState } from 'react';
import Aks from './Aks';
import './App.css';
import { FiCpu } from 'react-icons/fi';
function App() {
  const [rang,setRang]=useState("red")
  const [dokmeh,setDokmeh]=useState('btn btn-info')
  const chang=()=>{setRang(rang==="red" ?"green ":"red",setDokmeh(dokmeh==="btn btn-info"? "btn btn-danger":"btn btn-info"))} ;
   return (
    <div className='App'    style={{color:rang ,fontFamily:'Vazir'}}>
      علی مرتضی<FiCpu > </FiCpu><br />
      <button className={dokmeh} onClick={chang}> change: font</button>
      <Aks />
    </div>
  );
}

export default App;
