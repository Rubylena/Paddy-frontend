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
              theme: "outline", // filled_blue, filled_black
              text: "signup_with", // signin_with, signin, continue_with
              shape: "pill", // rectangular, circle, square
              size: "medium", // large, small
              //logo_alignment: left, center
              //width: max-width=400
              // locale: to set language
          })
        }
    }, [handleGoogle])

  return (
    <>
      <main className='flex justify-center gap-24 items-center h-full' >
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-2xl font-bold'>Sign Up</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? (
            <div>Loading....</div>
          ) : (
            <div id="signUpDiv" data-text="signup_with"></div>
          )}
        </div>
        <hr className='border-r border-border h-full hidden md:block' />
        <div className='text-right hidden md:block'>
          <p className='text-xl font-medium'>“Code today, code tomorrow, code forever”</p>
          <span>Coderholic</span>
        </div>
      </main>
    </>
  )
}

export default SignUp
