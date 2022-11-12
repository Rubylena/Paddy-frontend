import React from 'react'
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import { gapi } from 'gapi-script';

const SignIn = () => {
  // const [ profile, setProfile ] = useState(false);
  // const clientId = "20911244888-9d2teo13j1j7qb3bhttpghvibg2gs92b.apps.googleusercontent.com"

//   useEffect(() => {
//     const initClient = () => {
//           gapi.client.init({
//           clientId: clientId,
//           scope: ''
//         });
//      };
//      gapi.load('client:auth2', initClient);
//  });

  // const onSuccess = (res) => {
  //   setProfile(res.profileObj);
  // };

  // const onFailure = (err) => {
  //   console.log('failed', err);
  // };

  // const logOut = () => {
  //   setProfile(null);
  // };

  return (
    <div>
      <h1>Sign In</h1>
      <button>Sign in with Google</button>
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
  )
}

export default SignIn
