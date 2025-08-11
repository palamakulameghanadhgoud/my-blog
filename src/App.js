 import './App.css'; 
import Navbar from './navbar.js'; 
import Home from './home.js'; 
function App() { 
  return ( 
    <div className="App"> 
      <Navbar/> 
      <div className="content">HIT VERSE</div> 
      <Home /> 
    </div> 
  ); 
} 
export default App;