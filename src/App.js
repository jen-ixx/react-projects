import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import Notfound from './pages/NotFound'
import Homepage from './pages/Homepage'
import * as Gi from './pages/sample';



const App = () => {


  console.log(Gi.d);

  return (


    <Routes>

      <Route path='/' element={<RootLayOut />} >

        <Route index element={<Homepage />} />

        <Route path='*' element={<Notfound />} />

      </Route>

    </Routes >
  )
}

export default App
