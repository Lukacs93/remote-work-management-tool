import './App.css';
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/project-maganement/tasks/TaskList";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing-page/LandingPage";
import ProjectDashboard from "./components/project-maganement/ProjectDashboard";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={[<Dashboard/>, <ProjectDashboard userid={0}/>]} />
            <Route path="/tasks" element={[<Dashboard />, <TaskList />]} />
        </Routes>
    </div>
  );
}

export default App;
