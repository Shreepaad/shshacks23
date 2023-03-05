import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import Training from './pages/Training';
import Calendar from './pages/Calendar';
import Navbar from './pages/Navbar';
import Athletics from './pages/Athletics';
import Home from './pages/Home';
import cross_country from './pages/Cross';
import Cross from './pages/Cross';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div className='justify'>
          <Navbar />
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/calendar' element={<Calendar/>} />
            <Route path='/training' element={<Training/>} />
            <Route path='/athletics' element={<Athletics/>} />
            <Route path='/Cross' element={<Cross/>} />
           </Routes>
           
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
