

import Counter from './Component/Counter';
import './Component/Count.css';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import Box from './Component/Box';
import About from './Component/About';




function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)
  const showmsg=(msg,type)=>{
    setAlert({message:msg,
    type:type})
    setTimeout(()=>{
      setAlert(null)
    },3000)

  }

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      showmsg("You are in safely mode", "success");
    } else {
      setMode("dark");
      showmsg("This is danger line", "danger");
    }
  };
  
  return (
    <>

    
      
        <Counter method="Strega Company" mode={mode} tooglemode={togglemode}/>
        <Box/>

    </>
  );
}






export default App;
