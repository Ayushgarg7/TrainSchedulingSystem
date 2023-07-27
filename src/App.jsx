import './App.css'
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'
import User from './Components/User/User'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Router>
          <Home/>
          <Routes>
            {/* <Route exact path="/" element = {<Home />} /> */}
            <Route exact path="/admin" element = {<Admin />} />
            <Route exact path="/user" element = {<User/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
