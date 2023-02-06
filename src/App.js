import React from 'react';
import MainPage from './components/MainPage';
import {BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <MainPage />

      </BrowserRouter>
    </div>
  )
}

export default App;