import React from 'react'
import Routing from './Routing.jsx';
import { useState } from 'react'
import Login from './page/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './page/Signup/Signup'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
return(
  <>
  <QueryClientProvider client={queryClient}>
  <Toaster position='top center'/>
  <Routing/>
  </QueryClientProvider>
  </>
)
}
export default App;
