import React from 'react'

const Weather = (props) => { 
  return(
      <div>
        <input type='text' onChange={props.getW}></input>
          <br/>
          {props.temperature}
      </div>
    )
}

export default Weather