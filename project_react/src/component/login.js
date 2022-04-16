import React, { useEffect } from 'react';
import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const clientId = "302279677474-vbso6onq7uk5l68l1mk6u5csfb16hije.apps.googleusercontent.com";
function Login(props) {
    const {isLogin, setLogin} = props;
    const history = useNavigate();
 
  
    const [loading, setLoading] = useState('Loading...');
    const [user, setUser] = useState(null);
    
    const handleLoginSuccess = (response) => {
        console.log("Login Success ", response);
        setUser(response.profileObj);
        // console.log(user.email);
        // console.log(user.imageUrl);
        // console.log(user.givenName);
        // console.log(user.familyName);
        // console.log(user.googleId);
        console.log("eeee",response.profileObj.email)
        checkId(response.profileObj.email)
        sessionStorage.setItem("email", response.profileObj.email);
        setLoading();
        setLogin(true);

    }


   const checkId = async (e) => {    

        await axios.get(`http://localhost:9090/signup/${e}`)
            .then((res) => {
                
               console.log("dd ", res);
               console.log("aa", res.data.result);
               sessionStorage.setItem("user", res.data.result)
               
            }).catch((error) => {
                console.log("dd : "+error);
            });
    }

    useEffect(()=>{
    
        if(user==null){
          console.log("로그아웃됨");
          sessionStorage.clear();
          
        }else{
          sessionStorage.setItem("islogin", true);
         
          console.log("로그인됨");

        }
      }, [user])
    




    const handleLoginFailure = error => {
        console.log("Login Failure ", error);
        setLoading();
        
    }
    
    const handleLogoutSuccess = (response) => {
        console.log("Logout Success ", response);
        setUser(null);
        setLogin(false);
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
        <div><br/>
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