import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{
            padding: '50px 0px ',
            margin: '50px 0px ',
            background: 'gray',
            width: '800px'
        }}>
            <h2>This is HEader</h2>
            <Link  style={{
            padding: '0px 20px ',
        }} to='/'>Home</Link>
            <Link to='/login'><button>Login</button></Link>
        </div>
    );
};

export default Header;