import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <App />,
  </BrowserRouter>,
  
  document.getElementById('root')
)
// importa import {BrowserRouter} from 'react-router-dom';
// y luego envolvemos app para ocupar rutas 
//
//$ npx create-react-app routing
//$ npm i react-router-dom@6.3.0
// npm start 