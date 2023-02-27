import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/landing-page/Navbar'
import Header from './Components/landing-page/Header'
import LadingPage from './Components/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<LadingPage />} />
          {/* <Route path="/projects/" element={<Project />} /> */}
        </Routes>
    </div>
  );
}

export default App;
