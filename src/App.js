import './App.css';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Posts from './components/posts/posts';
import Users from './components/users/users';
import { useState } from 'react';
import { valuesContext } from './Context.js';

function App() {
  // States
  const [values, setValues] = useState([]);
  
  // Component Return
  return (
    <valuesContext.Provider value = {{values, setValues}}>
      <div className="app">
        <Router>
          <Nav /> {/* Equivalent to {Nav()} */}

          <Routes>
            <Route path ='/' element = {<Home />} />
            <Route path = '/home' element = {<Navigate replace to = '/' />} />
            <Route path ='/posts' element = {<Posts />} />
            <Route path ='/users' element = {<Users />} />
            
            <Route path = '*' element = {<NotFound />} />
          </Routes>
        </Router>
      </div>
    </valuesContext.Provider>
  );
}

export default App;