import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagelayout from './Pages/Pagelayout/Pagelayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagelayout />} >
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
