import React from 'react'
import Navbar from './Navbar'


import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/authActions';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const user = useSelector(state => state.auth.user);
  const propertyValue = user.email
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Perform logout logic, and after successful logout:
    dispatch(logoutSuccess());
    nav("/Login2 ")

  };
  

  return (
    <div>
      <Navbar/>
      <p>Welcome,{user} !</p>
      <button onClick={handleLogout}>Logout</button>
     
    </div>
  )
}
