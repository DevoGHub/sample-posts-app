import './nav.css';
import src from '../../resources/logo.png';
import {Link, NavLink} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { loggedInContext } from '../../Context';

function Nav(){
    // States
    const {setLoggedIn} = useContext(loggedInContext);

    // DOM functions
    function logout(){
        Cookies.remove('loggedIn');
        setLoggedIn(false);
    }
    
    // Component returns
    return (
        <header>
            <Link to = '/'>
                <div className='nav-logo-div'>
                    <img src={src} alt='logo'/>
                </div>
            </Link>

            <div className='navbar'>
                <NavLink to = '/' className={({isActive}) => isActive ? 'active-page' : ''}>
                    <div className='nav-ele'>
                        Home
                    </div>
                </NavLink>
                <NavLink to ='/posts' className={({isActive}) => isActive ? 'active-page' : ''}>
                    <div className='nav-ele'>
                        Posts
                    </div>
                </NavLink>
                <NavLink to ='/users' className={({isActive}) => isActive ? 'active-page' : ''}>
                    <div className='nav-ele'>
                        Users
                    </div>
                </NavLink>

                <button type='button' onClick={logout}>Logout</button>
            </div>
        </header>
    );
}

export default Nav;