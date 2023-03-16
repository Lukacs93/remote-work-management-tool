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
    
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser(decodedToken);
            setToken(token)
        }
    }, []);

    const handleLogin = (responseToken) => {

        if (responseToken) {
            localStorage.setItem("jwtToken", responseToken);
            const decodedToken = jwt_decode(responseToken);
            const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            setUser(decodedToken);

            if (decodedToken && role === "Admin") {
                navigate('/admin', { replace: true });
            } else {
                navigate('/main', { replace: true });
            }
        }
    };

    
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin}/>} />
            <Route path="/profile" element={[<Dashboard />, <Profile />]} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={[<Dashboard/>, <ProjectDashboard/>]} />
            <Route path="/tasks" element={[<Dashboard />, <TaskList />]} />
        </Routes>
    </div>
  );
}

export default App;
