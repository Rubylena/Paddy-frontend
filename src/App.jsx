import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Header/Nav'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={user?.email ? <Navigate to='/dashboard' /> : <Home />} />
        <Route element={user?.email ? <Navigate to='/dashboard' /> : <SignUp />} path='/sign-up' />
        <Route element={user?.email ? <Navigate to='/dashboard' /> : <SignIn />} path='/sign-in' />
        <Route element={user?.email ? <Dashboard user={user} /> : <Navigate to='/' />} path='/dashboard' />
      </Routes>
    </Router>
  )
}

export default App
