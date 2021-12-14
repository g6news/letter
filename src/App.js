import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.js';
import Issues from './issues.js'
import Join from './join.js'
import Contact from './contact.js'
import About from './about.js'
import Advice from './advice.js'
import Calendar from './calendar.js'
import Add from './add.js'
import Error from './error.js'
import Navbar from './navbar.js'
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/issues' element={<Issues />} />
        <Route exact path='/join' element={<Join />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/advice' element={<Advice />} />
        <Route exact path='/calendar' element={<Calendar />} />
        <Route exact path='/add' element={<Add />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
