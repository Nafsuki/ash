import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import app from './App.module.scss';

const App = () => {
  return (
    <div className={app.app}>
      <Navbar />
      <Main />
    </div>
  )
}

export default App;