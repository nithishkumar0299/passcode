import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [len,setLen]=useState(8)
  const[up,setUp]=useState(true)
  const[lo,setLo]=useState(true)
  const[nu,setNu]=useState(true)
  const[sy,setSy]=useState(true)
  const[ps,setPs]=useState("")
  
  const generateps=()=>{
    let charset=""
    if(up) charset+="QWERTYUIOPASDFGHJKLZXCVBNM"
    if(lo) charset+="qwertyuioplkjhgfdsazxcvbnm"
    if(nu) charset+="1234567890"
    if(sy) charset+="!@#$%^&*()"
    let generateset=""
    for(let i=0;i<len;i++)
    {
      const randomset=Math.floor(Math.random()*charset.length)
      generateset+=charset[randomset]
    }
      setPs(generateset)
  }


  const Clipboard=()=>{
    navigator.clipboard.writeText(ps)
    alert("password copied")
  }
  return (

    <>
    <div className='pg'>    
      <h1>PASSCODE GENERATER</h1>
      <br />
      <div >
      <label > Password length:</label>
      <br />
      <input type="number"  value={len} onChange={(e)=>setLen(parseInt(e.target.value))}/>
      </div>
      <div className='chgr'>
        <input type="checkbox" id="upper" checked={up} onChange={(e)=>setUp((e.target.checked))} />
        <label htmlFor="upper">include upper case</label>
        <br />
        <input type="checkbox" id="lower"checked={lo} onChange={(e)=>setLo((e.target.checked))} />
        <label htmlFor="lower">include lower case</label>
        <br />
    
        <input type="checkbox" id="number"checked={nu} onChange={(e)=>setNu((e.target.checked))} />
        <label htmlFor="number">include number</label>
        <br />
        <input type="checkbox" id="symbol"checked={sy} onChange={(e)=>setSy((e.target.checked))} />
        <label htmlFor="symbol">include symbols</label>

      </div>

      <button className='btn btn-primary'onClick={generateps}>GENERATE</button>

      <div  >
        <input type="text" readOnly value={ps}/>
        <br />
        <center>
        <button className='btn btn-success' onClick={Clipboard}> copy</button>
        </center>
      </div>

      
    </div>

    </>
  )
}

export default App


