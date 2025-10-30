import React, { useState } from 'react';


function Box(props) {
    const [text, setText] = useState("");
  const handleCopy = () => {
navigator.clipboard.writeText(text);
  
    props.showmsg("You have sucessfully converted uppercase","success")
  };
  const cleartext=()=>{
    setText("");
  }
  const extraspace=()=>{
setText(text.trim().replace(/\s+/g, ' '));

  }
  return (
    <div> <div className="flu">
    <textarea
    type="text"
    placeholder="enter text here"
    value={text}
    onChange={(e)=>(setText(e.target.value))}/>
   </div>
   <button onClick={handleCopy}>Copy</button>
   <button onClick={cleartext}>Clear</button>
   <button onClick={extraspace}>Remove Extra Space</button></div>
  )
}

export default Box