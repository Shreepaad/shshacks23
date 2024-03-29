import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import Training from './pages/Training';
import Calendar from './pages/Calendar';
import Navbar from './pages/Navbar';
import Athletics from './pages/Athletics';
import Home from './pages/Home';
import Cross from './pages/Cross';
import Workouts from './pages/workouts';
import Soccer from './pages/Soccer';
import Cheer from './pages/Cheerleading';
import Football from './pages/Football';
import Tennis from './pages/Tennis';

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
            <Route path='/cross' element={<Cross/>} />
            <Route path='/workouts' element={<Workouts/>} />
            <Route path='/soccer' element={<Soccer/>} />
            <Route path='/cheer' element={<Cheer/>} />
            <Route path='/football' element={<Football/>} />
            <Route path='/tennis' element={<Tennis/>} />


           </Routes>
           
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
