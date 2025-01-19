import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './view/HomePage'
import AboutPage from './view/AboutPage'
import LoginPage from './view/LoginPage'

function App() {

  return (
    <div className="flex ">
      <Router>
        <Sidebar />
        <div className="w-full">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/Login' element={<LoginPage />}/>
        </Routes>
        </div>
         </Router>
    </div>
  )
}

export default App
