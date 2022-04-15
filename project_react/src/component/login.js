import React from 'react';
import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "302279677474-vbso6onq7uk5l68l1mk6u5csfb16hije.apps.googleusercontent.com";
function Login(props) {

    
    const [loading, setLoading] = useState('Loading...');
    const [user, setUser] = useState(null);
    const handleLoginSuccess = (response) => {
        console.log("Login Success ", response);
        setUser(response.profileObj);
        console.log(user.email);
        console.log(user.imageUrl);
        console.log(user.givenName);
        console.log(user.familyName);
        console.log(user.googleId);
        
        window.sessionStorage.setItem("user", user);
        var user = window.sessionStorage.getItem("user");

        setLoading();
    }
    
    const handleLoginFailure = error => {
        console.log("Login Failure ", error);
        setLoading();
    }
    
    const handleLogoutSuccess = (response) => {
        console.log("Logout Success ", response);
        setUser(null);
    }
    
    const handleLogoutFailure = error => {
        console.log("Logout Failure ", error);
    }
    
    const handleRequest = () => {
        setLoading("Loading...");
    }
    
    const handleAutoLoadFinished = () => {
        setLoading();
    }
 
    return (
        <div>
        <h3>Login with Google using React </h3>
        
        {user ? 
         <div>
            <div className="name">Welcome {user.name}!</div>
            <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={handleLogoutSuccess}
            onFailure={handleLogoutFailure}
            />
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div> :
        
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        />
        }
    </div>
    );
}

export default Login;