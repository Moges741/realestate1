import React from 'react'
import Routing from './Routing.jsx';
import { useState } from 'react'
import Login from './page/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './page/Signup/Signup'
import { Toaster } from 'react-hot-toast';
function App() {
return(
  <>
  <Toaster position='top center'/>
  <Routing/>
  </>
)
}
export default App;
