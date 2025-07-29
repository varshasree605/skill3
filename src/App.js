import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#282c34', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '40vmin', pointerEvents: 'none' }} /> 
        <p style={{ color: '#61dafb', fontsize: '24px' }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb', fontsize: '20px' }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
