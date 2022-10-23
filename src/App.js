import Header from './components/header/header'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Login from './pages/authentification/logIn'

const App = ({ children }) => {
  const isLoggedIn = useSelector(store => store?.authentication.isLoggedIn);
  const userData = localStorage.getItem('UserName') && localStorage.getItem('Password')
  if (!isLoggedIn) {
    return <Login/>
  } else {
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
      </>
    )
  }
}

export default App

