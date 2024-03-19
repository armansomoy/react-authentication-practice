import React from 'react';
import { GoogleAuthProvider, getAuth  } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        console.log('click');
    }
    return (
        <div>
            <button onClick={googleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;