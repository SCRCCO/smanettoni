import React, { useState } from 'react';
import Navbar from './Navbar';

import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';
import { auth } from './../firebase';
import { signOut } from 'firebase/auth';
import ListItem from './ListItem';
import "./Home.css";
export default function Home() {
  const nav = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    signOut(auth)
      .then(() => {
        nav('/Login2');
      })
      .catch((error) => {
        // Handle error
      });
  };

  const handleConfirmFirstLogin = () => {
    setFirstTimeLogin(false);
  };

  return (
    <div className='corpo'>
      
      <Navbar />
      
      

        {/* <div>
          <p>Welcome to our platform! This is your first time logging in.</p>
          <button onClick={handleConfirmFirstLogin}>Confirm First Login</button>
          <ListItem  title="Smartphone for Sale"
        description="Gently used smartphone in great condition."
        price="250"
        imageUrl="https://example.com/smartphone.jpg" />
  </div> */}
      
      
    </div>
  );



{/*   return (
    <div>
      <Navbar />
      {firstTimeLogin ? (
        <div>
          <p>Welcome to our platform! This is your first time logging in.</p>
          <button onClick={handleConfirmFirstLogin}>Confirm First Login</button>
          <ListItem />
        </div>
      ) : (
        <div>
          <p>Welcome, {user}!</p>
          <ListItem
        title="Smartphone for Sale"
        description="Gently used smartphone in great condition."
        price="250"
        imageUrl="https://example.com/smartphone.jpg"
      />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );*/}
}
