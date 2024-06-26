import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import Nethaji_Users from './Components/Nethaji_Users';
import NavBar from './Components/NavBar';
import Render_Comp from './Components/Render_Comp';

function App() {
  return (
    <div className="App">
      <NavBar/>
     {/* <User/> */}
     {/* <Nethaji_Users/> */}
     <Render_Comp/>
    </div>
  );
}

export default App;
