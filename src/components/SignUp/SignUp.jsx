import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const SignUp = () => {
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:5152/signup"
    )

    useEffect(() => {
        if (window.google) {
          google.accounts.id.initialize({
              client_id: "20911244888-9d2teo13j1j7qb3bhttpghvibg2gs92b.apps.googleusercontent.com",
              // client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
              callback: handleGoogle,
          })

          google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
              // type: "standard", or icon
              theme: "filled_black", // filled_blue, outline
              text: "continue_with", // signin_with, signin, signup_with
              shape: "pill", // rectangular, circle, square
              // size: small, large, medium
              //logo_alignment: left, center
              //width: max-width=400
              // locale: to set language
          })
        }
    }, [handleGoogle])

  return (
    <>
    <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Register to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>
  )
}

export default SignUp
