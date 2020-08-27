import React, { useState, useEffect, useRef } from "react";
import "./App.css";
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(100)

  useEffect(() => {
        document.querySelector(".range").style.left = left + "%"
        document.querySelector(".firstthumb").style.left = left - 3  + "%"
        document.querySelector(".range").style.right =  100 - right + '%' 
        document.querySelector(".secoundthumb").style.right =  100 - right - 4  + '%'
    })

  const leftMoveSet = ()=>{
    document.querySelector(".first").style.pointerEvents = "none"
    document.querySelector(".second").style.pointerEvents = "all"
  }
  const rightMoveSet = ()=>{
    document.querySelector(".first").style.pointerEvents = "all"
    document.querySelector(".second").style.pointerEvents = "none"
  }
  const leftOutSet = ()=>{
    document.querySelector(".first").style.pointerEvents = "none"
    document.querySelector(".second").style.pointerEvents = "all"
  }
  const rightOutSet = ()=>{
    document.querySelector(".first").style.pointerEvents = "all"
    document.querySelector(".second").style.pointerEvents = "none"
  }

  return (
    <div id="App">
      <div className='slider' id="slider-distance">
        <div>
          <div className='inverse-left'  style={{ width: 70 + '%' }}></div>
          <div className='inverse-right' style={{ width: 70 + '%' }}></div>
          <div className='range' style={{ left: 30 + '%', right:  right + '%' }}></div>
          <span className='firstthumb thumb' style={{ left: left + '%' }} onMouseEnter={leftMoveSet} ></span>
          <span className='secoundthumb thumb' style={{ right: right- 4 + '%' }} onMouseEnter={rightMoveSet} ></span>
          <div className='sign' style={{ left: left + '%' }}>
            <span id="value">{left}</span>
          </div>
          <div className='sign' style={{ right: 100 -  right - 1 + '%' }}>
            <span id="value">{right}</span>
          </div>
        </div>
        <input type="range" className="first"  tabIndex="0" value={right} max="100" min={left} step="1" onChange={ e=>setRight(e.target.value)} onClick={rightOutSet}/>

        <input type="range" tabIndex="0"  value={left} max={right} min="0" step="1" className="second" onChange={e=>setLeft(e.target.value)} onClick={leftOutSet}/>
      </div>
    </div>
  )
}

export default App;