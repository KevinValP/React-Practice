import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

const SpecialButton = ({text}) =>{
  return(
    <button>{text}</button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)
