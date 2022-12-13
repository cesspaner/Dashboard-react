import React from 'react'
import '../App.css';

//importamos nuestros componentes
import Show from './Show';
import Create from './Create';
import Edit from './Edit';

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const RegistrosE = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
     </BrowserRouter> 
  )
}

export default RegistrosE