import './nav.css';
import src from '../../resources/logo.png';
import {Link, NavLink} from 'react-router-dom';

function Nav(){
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
            </div>
        </header>
    );
}

export default Nav;