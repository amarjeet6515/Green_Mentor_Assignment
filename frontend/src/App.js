import logo from './logo.svg';
import './App.css';
import Allroutes from './allroutes/Allroutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
