import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import TaskList from "./components/project-maganement/tasks/TaskList";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing-page/LandingPage";
import ProjectDashboard from "./components/project-maganement/ProjectDashboard";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    const userRole = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser(decodedToken);
            setToken(token)
        }
    }, []);
    console.log(user)
    const handleLogin = (responseToken) => {

        if (responseToken) {
            localStorage.setItem("jwtToken", responseToken);
            const decodedToken = jwt_decode(responseToken);
            const role = decodedToken[userRole];
            setUser(decodedToken);
            console.log(role)

            if (decodedToken && role === "Admin") {
                navigate('/projects', { replace: true });
            } else {
                navigate('/dashboard', { replace: true });
            }
        }
    };

    const handleLogout = () => {
        console.log("clicked")
        localStorage.removeItem("jwtToken");
        setUser(null);
        setToken(null);
        navigate('/login', { replace: true });
        
    };
    
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
            <Route path="/profile" element={[<Dashboard user={user} handleLogout={handleLogout}/>, <Profile />]} />
            <Route path="/dashboard" element={<Dashboard user={user} handleLogout={handleLogout}/>} />
            <Route path="/projects" element={[<Dashboard user={user} handleLogout={handleLogout}/>, <ProjectDashboard/>]} />
            <Route path="/tasks" element={[<Dashboard user={user} handleLogout={handleLogout}/>, <TaskList />]} />
        </Routes>
    </div>
  );
}

export default App;
