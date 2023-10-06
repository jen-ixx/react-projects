import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Components/RootLayOut'
import Notfound from './Components/Notfound'
import Homepage from './pages/Homepage'



const App = () => {

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
