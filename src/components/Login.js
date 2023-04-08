import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  // registering a user
  const register = () => {
    if (!name) {
      alert("Please enter your full name to proceed");
    }

    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            // dispatch to dL the below
            // email, uid, displayName, photoUrl are what payload carries to the dL
            // user.email, user.uid is read from the payload
            dispatch(
              login({
                uid: user.uid,
                email: email,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((error) => {
            alert(error);
          });
      }
    );
  };

  const logintoApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          login({
            uid: user.uid,
            email: email,
            displayName: name,
            photoUrl: profilePic,
          })
        );
        // ...
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"
        alt="linkedInLogo"
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile Picture URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={logintoApp}>
          Sign In
        </button>
        {/* <button type="submit" onClick={loginWithGoogle}>
          Sign In with Google
        </button> */}
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now.
        </span>
      </p>
    </div>
  );
}

export default Login;
