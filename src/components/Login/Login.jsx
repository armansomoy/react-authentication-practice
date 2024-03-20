import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
        setUser(null);
      })
      .catch((err) => console.log(err));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={googleSignIn}>Google Login</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </div>
      )}

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
