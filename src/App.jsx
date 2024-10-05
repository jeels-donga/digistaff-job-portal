import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagelayout from './Pages/Pagelayout/Pagelayout'
// import Jobs from './Pages/JobPotral/Job'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pagelayout />} >
          {/* <Route path='/' element={<Jobs />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
