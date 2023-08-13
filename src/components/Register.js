import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { auth } from "./../firebase";
import React, { useState, useEffect } from "react";
import "./Login2.css";
import InputButton from "./InputButton";
import { Link, useAsyncError } from "react-router-dom";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  const [logged, setLogged] = useState(false); // Use the useState hook
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    // Set up an authentication state observer
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const handleRegister = async () => {
    try {
      // Perform form validation as before

      if (!validator.isLength(user, { min: 5 })) {
        toast.error("Name must be at least 5 characters");
        return;
      }

      if (!validator.isEmail(email)) {
        toast.error("Invalid email address");
        return;
      }

      if (!validator.isLength(pass, { min: 6 })) {
        toast.error("Password must be at least 6 characters");
        return;
      }

      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .then(() => {
          toast.success("Registration successful");
        })
        .then(() => {
          nav("/home");
        })
        .then(() => (logged = true))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed");
    }
    console.log(logged);
  };
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .then(() => {
        nav("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
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
            <div className="titolo"> Let's get started</div>
            <div className="input-container">
              <ToastContainer />
              <InputButton
                handleChange={handleChangeUser}
                value={user}
                titolo="Name"
                tipo="text"
                placeholder="Your Name"
              />
              <InputButton
                handleChange={handleChangeEmail}
                value={email}
                titolo="Email"
                tipo="text"
                placeholder="Your Email"
              />
              <InputButton
                handleChange={handleChangePass}
                value={pass}
                titolo="Password"
                tipo="password"
                placeholder="Password"
              />
              <button onClick={handleRegister} className="submit-button">
                REGISTER
              </button>
              <div className="orlabel"></div>
              <div className="accessiesterni">
                <button className="google" onClick={handleGoogle}>
                  <img src="./assets/google.png" alt="google" />
                  <p>Continue with Google </p>
                </button>
                {/*                <button onClick={handleFacebook} className="facebook">
                  <img src="./assets/facebook.png" alt="facebook" />
                  <p>Continue with Facebook</p>
                </button>
                 <button className="linkedin"> 
                  <img src="./assets/linkedin.png" alt="linkedin" />
                  <p>Continue with Linkedin</p>
                </button>  */}
              </div>
              <div className="testofinale">
                Already have an account?{" "}
                <Link className="link" to="/login">
                  {" "}
                  LOGIN HERE{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
