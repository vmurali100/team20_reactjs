import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Contact = React.lazy(() => import('./Components/Contact'));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const PageNotFound = React.lazy(() => import('./Components/PageNotFound'));
const Register = React.lazy(() => import('./Components/Register'));
const Login = React.lazy(() => import('./Components/Login'));
const ProtectedRoute = React.lazy(() => import('./Components/ProtectedRoute'));
const Users = React.lazy(() => import('./Components/Users'));
const Dashboard = React.lazy(() => import('./Components/Dashboard'));
const Stats = React.lazy(() => import('./Components/Dashboard/Stats'));
const Settings = React.lazy(() => import('./Components/Dashboard/Settings'));
const Profile = React.lazy(() => import('./Components/Dashboard/Profile'));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={'loading'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
       
      </Router>
      {/* <Home />
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
