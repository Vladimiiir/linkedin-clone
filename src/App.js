import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser); // pull user from dL - here it's null (initial value)
  const dispatch = useDispatch();

  // prevents user state from disappearing when page reloads
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //   User is signed in
        //   const uid = user.uid;
        dispatch(
          login({
            // when component mounts, read user.email user.uid.... from payload, and send to dL to maintain the user state
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        // User is signed out
        // dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
