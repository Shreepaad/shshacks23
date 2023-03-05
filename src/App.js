import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import Training from './pages/Training';
import Calendar from './pages/Calendar';
import Navbar from './pages/Navbar';
import Athletics from './pages/Athletics';
import Home from './pages/Home';
import cross_country from './pages/cross_country';
 
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
            <Route path='/cross_country' element={<cross_country/>} />
           </Routes>
           
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
