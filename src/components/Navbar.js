import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Navbar() {
  return (
    <div className='contenitore'>
        <div className="partelogo">
            <img src="./assets/logo.png" alt="logo" />
            <p className='titolo'>
            smanettony.
            </p>

        </div>
        <div className="partedestra">
            <SearchIcon/>
            <TurnedInNotIcon/>
            <NotificationsNoneIcon/>
            <AccountCircleIcon/>


        </div>
      

    </div>
  )
}
