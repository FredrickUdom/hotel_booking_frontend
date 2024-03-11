import './App.css';
import NavBar from './components/navBar/navBar';
import Homescreen from './screen/homeScreen';
import {BrowserRouter, Router, Link} from 'react-dom';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Homescreen/>
    </div>
  );
}

export default App;
