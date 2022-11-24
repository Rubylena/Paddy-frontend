import React from 'react'

const Dashboard = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className='h-full'>
      {/* <h1>Dear {user?.email}</h1> */}

      <div
      className='flex justify-end'
      >
        <button
          onClick={logout}
          className='border border-border py-2 px-4 text-red'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
