import React from 'react'
import Routing from './Routing.jsx';
import { useState } from 'react'
import Login from './page/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './page/Signup/Signup'
function App() {
const App = () => {
  return (
    <>
<Routing/>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
     </BrowserRouter>
    </>
  )
}
}
export default App;
