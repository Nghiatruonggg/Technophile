import React from 'react'
import Homepage from './pages/user/Homepage'
import { Route, Routes } from 'react-router-dom'
import LayoutUser from './pages/user/LayoutUser'
import MobileCategories from './pages/user/MobileCategories'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutUser/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/mobile-categories' element={<MobileCategories/>} />
      </Route>
    </Routes>
  )
}

export default App