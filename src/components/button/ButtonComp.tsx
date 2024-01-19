import React from 'react'
import "./buttonComp.css"

export const ButtonComp = ({text, handleClick}: {text:string, handleClick: VoidFunction}) => {
  return (
    <div className='button-30  ' onClick={handleClick}>{text}</div>
  )
}
