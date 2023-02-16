import './App.css';
import Home from './Components/landing-page/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <div className = "head-text">
          <div className="Slogen-placeholder">
            <img src="https://indatalabs.com/wp-content/uploads/2020/05/main-video-indatalabs-poster.jpg" style={{width: '100%'}} alt=''/>
          </div>
          <div className='text-on-image'>
            <h1>Remotivate</h1> 
            <p> Streamline your remote work with Remotivate</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
