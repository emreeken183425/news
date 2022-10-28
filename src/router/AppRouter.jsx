import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import DetailPage from '../pages/DetailPage'
import Favoriler from '../pages/Favoriler'
const AppRouter = () => {
  return (
   
<BrowserRouter>
<Navbar />
<Routes>
    <Route path='/'  element={<Home /> }  />
    <Route path='/detail'  element={<DetailPage />  }  />
    <Route path='/favoriler'  element={<Favoriler />  }  />



</Routes>

</BrowserRouter>


  )
}

export default AppRouter
