import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import Sidebar from './components/Sidebar'
import HomePage from './view/HomePage'
import AboutPage from './view/AboutPage'
import LoginPage from './view/LoginPage'


function App() {

  return (
    <div className="flex ">
  <UserProvider>
     <Router>
       <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
     </Router>
 </UserProvider>
    </div>
  )
}

export default App
