import './App.css';
import Navbar from './Components/landing-page/Navbar'
import Header from './Components/landing-page/Header'
import LadingPage from './Components/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
      </header>
      <LadingPage />
    </div>
  );
}

export default App;
