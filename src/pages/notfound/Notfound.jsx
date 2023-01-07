import React from 'react'
import SideBar from '../../components/SideBar'

const Notfound = () => {
  return (
    <>
      <div className="grid grid-home">
        <SideBar />
        <div className="flex justify-center items-center">
          <div className="font-bold text-5xl text-red-600 text-center">
            Error 404 Not Found
          </div>
        </div>
      </div>
    </>
  )
}

export default Notfound