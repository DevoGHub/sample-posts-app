import Cookies from 'js-cookie';
import { useContext } from 'react';
import { loggedInContext } from '../../Context';
import './login.css';

function Login(){
    // States
    const {setLoggedIn} = useContext(loggedInContext);

    // DOM functions
    function login(e){
        e.preventDefault();
        document.querySelector('#login-remember').checked && Cookies.set('loggedIn', '12', {expires : 365})
        setLoggedIn(true);
    }

    // Component returns
    return (
        <div className='main-component main-flex column-flex login-main'>
            <form>
                <label htmlFor='login-email'>Email</label>
                <input type='email' id='login-email' placeholder='Email' />
            
                <label htmlFor='login-password'>Password</label>
                <input type='password' id='login-password' placeholder='Password' />

                <input type='checkbox' id='login-remember' defaultChecked />
                <label htmlFor='login-remember'>Remember me</label>

                <button type = 'submit' onClick={login}>Login</button>
            </form>
        </div>
    );
}

export default Login;