import React, { useState } from "react";
import "./Login2.css";
import InputButton from "./InputButton";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {auth} from "./../firebase";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authActions';

export default function Login2() {
  const [userlog, setUserlog] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const handleLogin = () => {
    try {
   
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(loginSuccess(user.email));
          nav("/home");
          // ...
     
          
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error("Invalid Email or passsword");
          const errorMessage = error.message;
        });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="corpo">
      <div className="container_generale">
        <div className="container_sinistro">
          <div className="sinistra">
            <div className="scritta">
              <img src="./logocolor.png" alt="logo" />
              <p>Smanettony</p>
            </div>
            <div className="descrizione">
              La piattaforma che semplifica e consente l'incontro tra domanda e
              offerta nel settore dell'automazione industriale, il tutto
              progettato per semplificare e accelerare il processo decisionale,
              consentendo di trovare in modo efficiente le soluzioni più adatte
              ad esigenze specifiche.
            </div>

            <div className="container_immagine">
              <img src="tree.png" alt="logo" />
            </div>
          </div>
        </div>

        <div className="container_destro">
          <div className="container_login">
            <div className="titolo"> Login</div>
            <div className="input-container">
              <ToastContainer />
              <InputButton
                handleChange={handleChangeEmail}
                value={email}
                titolo="Email"
                tipo="text"
                placeholder="Your email"
              />
              <InputButton
                handleChange={handleChangePass}
                value={pass}
                titolo="Password"
                tipo="password"
                placeholder="Password"
              />
              <button onClick={handleLogin} className="submit-button">
                LOGIN
              </button>
              <div className="orlabel">
                <div className="scrittaor">Or</div>
              </div>
              <div className="accessiesterni">
                <button className="google">
                  <img src="./assets/google.png" alt="google" />
                  <p>Continue with Google </p>
                </button>
                {/* <button className="facebook">
                  <img src="./assets/facebook.png" alt="facebook" />
                  <p>Continue with Facebook</p>
                </button>
                <button className="linkedin">
                  <img src="./assets/linkedin.png" alt="linkedin" />
                  <p>Continue with Linkedin</p>
  </button> */}
              </div>
              <div className="testofinale">
                You don’t have an account?{" "}
                <Link className="link" to="/register">
                  {" "}
                  REGISTER{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
