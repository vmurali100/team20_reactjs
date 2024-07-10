import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import UserDetails from "./Components/UserDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Dashboard/Products";
import Projects from "./Components/Dashboard/Projects";
import Reviews from "./Components/Dashboard/Reviews";
import { Suspense } from "react";

const Users = React.lazy(() => import("./Components/Users"));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const PageNotFound = React.lazy(() => import('./Components/PageNotFound'));
const ProtectedRoute = React.lazy(() => import('./Components/ProtectedRoute'));
const Login = React.lazy(() => import('./Components/Login'));
const UserDetails = React.lazy(() => import('./Components/UserDetails'));
const Dashboard = React.lazy(() => import('./Components/Dashboard/Dashboard'));
const Products = React.lazy(() => import('./Components/Dashboard/Products'));
const Projects = React.lazy(() => import('./Components/Dashboard/Projects'));
const Reviews = React.lazy(() => import('./Components/Dashboard/Reviews'));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={'Loading ...'}>
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
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="products" element={<Products />} />
            <Route path="projects" element={<Projects />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
      
      </Router>
    </div>
  );
}

export default App;
