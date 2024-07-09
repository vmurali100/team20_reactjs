import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
