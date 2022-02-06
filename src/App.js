import './App.css';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Posts from './components/posts/posts';
import Users from './components/users/users';
import { useState } from 'react';
import { valuesContext, loggedInContext } from './Context.js';
import Login from './components/login/login.js';
import Cookies from 'js-cookie';
import ViewPost from './components/viewPost/viewPost';

function App() {
  // States
  const [values, setValues] = useState([]);
  const [loggedIn, setLoggedIn] = useState(Cookies.get('loggedIn'));
  
  // Component Return
  // if(!loggedIn) return (
  //   <loggedInContext.Provider value = {{loggedIn, setLoggedIn}} >
  //     <div className='app'>
  //       <Router>
  //         <Routes>
  //           <Route path = '/' element = {<Login />} />

  //           <Route path = '*' element = {<Navigate replace to = '/' />} />
  //         </Routes>
  //       </Router>
  //     </div>
  //   </loggedInContext.Provider>
  // );

  if(!loggedIn) return (
    <loggedInContext.Provider value = {{setLoggedIn}} >
      <div className='app'>
        <Router>
          <Routes>
            <Route path = '*' element = {<Login />} />
          </Routes>
        </Router>
      </div>
    </loggedInContext.Provider>
  );

  return (
    <valuesContext.Provider value = {{values, setValues}}>
      <div className="app">
        <Router>
          <loggedInContext.Provider value = {{setLoggedIn}}>
            <Nav /> {/* Equivalent to {Nav()} */}
          </loggedInContext.Provider>

          <Routes>
            <Route path ='/' element = {<Home />} />
            <Route path = 'home' element = {<Navigate replace to = '/' />} />
            
            <Route path ='posts' element = {<Posts />} />
            <Route path = 'posts/:id' element = {<ViewPost />} />

            <Route path ='users' element = {<Users />} />
            
            <Route path = '*' element = {<NotFound />} />
          </Routes>
        </Router>
      </div>
    </valuesContext.Provider>
  );
}

export default App;