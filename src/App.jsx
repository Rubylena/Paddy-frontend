import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Header/Nav'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SignUp />} path='/sign-up' />
        <Route element={<SignIn />} path='/sign-in' />
      </Routes>
    </Router>
  )
}

export default App
