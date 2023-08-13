import React, { useState } from 'react'
import './InputButton.css'

function InputButton({titolo,tipo,placeholder,value,handleChange}) {


  return (
    <div className="input-container">
          <label className="input-label">{titolo}</label>
            <input
              type={tipo}
              className="input-field"
              placeholder={placeholder}
              value = {value}
              onChange={handleChange}
            />

      
    </div>
  )
}

export default InputButton
