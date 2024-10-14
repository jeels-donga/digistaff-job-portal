import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pagelayout from './Pages/Pagelayout/Pagelayout'
import Job from './Pages/JobPotral/Job'
import JobViewPage from './Pages/JobPotral/JobViewPage'
import SignIn from './Pages/Auth/SignIn'
import RegisterPage from './Pages/Auth/RegisterPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<Pagelayout />} >
          <Route path='/jobs' element={<Job />} />
          <Route path='/jobs/:id' element={<JobViewPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
