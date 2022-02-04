import './App.css';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Posts from './components/posts/posts';
import Users from './components/users/users';

function App() {
  
  // Component Return
  return (
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
  );
}

export default App;