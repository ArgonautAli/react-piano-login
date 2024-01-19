import React from 'react'
import "./textField.css"

export const TextField = ({text}: {text:string}) => {
  return (
    <div className='field-typography'>{text}</div>
  )
}
