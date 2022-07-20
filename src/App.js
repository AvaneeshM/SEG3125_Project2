import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import Club from './Club';
import Program from './Program';
import Rentals from './Rentals';
import CheckoutP from './CheckoutP';
import French from './French';
import Submit from './Submit';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navigation/>            
    <Routes>
      <Route path='/programcheckout' element={<CheckoutP/>}/>  
       <Route path='/rentals' element={<Rentals/>}/>  
       <Route path='/program' element={<Program/>}/>   
       <Route path='/club' element={<Club/>}/>                 
       <Route path='/contact' element={<Contact/>}/> 
       <Route path='/french' element={<French/>}/> 
       <Route path='/submit' element={<Submit/>}/> 
       <Route path='/' element={<Home/>}/>            
    </Routes>
      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
