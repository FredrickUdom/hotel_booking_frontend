import './App.css';
import NavBar from './components/navBar/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/homeScreen';
// import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';



function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        
        <Routes>
          <Route exact path="/home" element={<Homescreen/>} />
        </Routes>
        

      </BrowserRouter>


    </div>
  );
}

export default App;
