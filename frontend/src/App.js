import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/landing-page/Navbar'
import Header from './components/landing-page/Header'
import LadingPage from './components/landing-page/LandingPage';
import TaskList from "./components/project-maganement/tasks/TaskList";

function App() {
  return (
    <div className="App">
        {/*<Navbar />*/}
        {/*<Header />*/}
        {/*<Routes>*/}
        {/*  <Route exact path="/" element={<LadingPage />} />*/}
        {/*  /!* <Route path="/projects/" element={<Project />} /> *!/*/}
        {/*</Routes>*/}
        <TaskList />
    </div>
  );
}

export default App;
