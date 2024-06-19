import React from 'react'
import ReactDOM from 'react-dom/client'


const SpecialButton = ({text}) =>{
  return(
    <button>{text}</button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <SpecialButtonButton text ="Hola"/>
    <SpecialButtonButton text ="Adios"/>
    <SpecialButtonButton text ="Hasta Luego"/>        

  </React.Fragment>
)
