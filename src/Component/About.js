import React, { useState } from 'react'

function About() {
    const[mode,setMode]=useState("light")
    const displaymode=()=>{
        setMode(mode==="light"?"dark":"light")
    }
  return (
    <>
    <h2>This is the all Headings</h2>
    <div style={{
        backgroundColor:mode==="light"?"black":"white",
        color:mode==="light"?"white":"black",
       padding:"20px"
    }}> 



<p>
Kya tum chahogi main tumhe ek ready-made component bana kar du jo ek button click par random lorem ipsum paragraph generate
</p>
<button onClick={displaymode}>
{mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
</button>
    </div></>
  )
}

export default About
