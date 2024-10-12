import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagelayout from './Pages/Pagelayout/Pagelayout'
import Job from './Pages/JobPotral/Job'
import JobViewPage from './Pages/JobPotral/JobViewPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pagelayout />} >
          <Route path='/' element={<Job />} />
          <Route path='/jobs/:id' element={<JobViewPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
