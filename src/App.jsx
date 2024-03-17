import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

import "./layout.scss"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">      
        <Home />
      </div>
    </div>
  )
}

export default App