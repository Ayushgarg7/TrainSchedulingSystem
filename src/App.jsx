import './App.css'
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import User from './Components/User/User'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Home />
      {/* <Admin/> */}
      {/* <User/> */}
    </div>
  )
}

export default App
