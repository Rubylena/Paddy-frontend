import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const SignIn = () => {
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:5152/login"
    )

    useEffect(() => {
        if (window.google) {
          google.accounts.id.initialize({
              client_id: "20911244888-9d2teo13j1j7qb3bhttpghvibg2gs92b.apps.googleusercontent.com",
              // client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
              callback: handleGoogle,
          })

          google.accounts.id.renderButton(document.getElementById("loginDiv"), {
              // type: "standard", or icon
              theme: "outline",
              text: "signin_with",
              shape: "pill",
              size: "medium", 
          })
        // google.accounts.id.prompt()
        }
    }, [handleGoogle])

  return (
    <>
      <main className='flex justify-center gap-24 items-center h-full' >
          <div className='flex flex-col items-center gap-5'>
            <h2 className='text-2xl font-bold'>Sign In</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
          </div>
          <hr className='border-r border-border h-full hidden md:block' />
          <div className='text-right hidden md:block'>
            <p className='text-xl font-medium'>“Code today, code tomorrow, code forever”</p>
            <span>Coderholic</span>
          </div>
        </main>
      <footer></footer>
    </>
  )
}

export default SignIn
