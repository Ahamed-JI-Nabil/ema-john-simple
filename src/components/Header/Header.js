import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {

    const user = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }

    console.log(user)

    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/"></Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/shipment">Shipment</Link>
                <Link to="/about">About</Link>
                {
                    user[0] ? <Link to="/login" onClick={handleSignOut}>SignOut</Link> : <Link to="/login">LogIn</Link>
                }
            </div>
        </nav>
    );
};

export default Header;