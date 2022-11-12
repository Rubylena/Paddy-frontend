import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Header/Nav'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

function App() {
  const clientId = '20911244888-9d2teo13j1j7qb3bhttpghvibg2gs92b.apps.googleusercontent.com';
  const key = 'AIzaSyBVCUN3tMfZnl5iZQjGN31EkwVsaub4RV4';

  useEffect(() => {
    const initClient = () => {
          gapi.auth2.init({
          clientId: clientId,
          apiKey: key,
          scope: '',
        });
     };
     gapi.load('client:auth2', initClient);
 });

  const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};
  // const onSuccess = (res) => {
  //   setProfile(res.profileObj);
  // };

  // const onFailure = (err) => {
  //   console.log('failed', err);
  // };

  // const logOut = () => {
  //   setProfile(false);
  // };

  return (
    <div>
      <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />

      {/* {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                />
            )} */}
    </div>
    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route element={<SignUp />} path='/sign-up' />
    //     <Route element={<SignIn />} path='/sign-in' />
    //     <Route element={<Dashboard />} path='/dashboard' />
    //   </Routes>
    // </Router>
  )
}

export default App
