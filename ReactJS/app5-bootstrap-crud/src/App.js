import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import Nethaji_Users from './Components/Nethaji_Users';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
     {/* <User/> */}
     <Nethaji_Users/>
    </div>
  );
}

export default App;
