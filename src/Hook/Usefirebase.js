import { useEffect, useState } from "react";
import initializefirebase from "../Firebase/Init.firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import axios from "axios";

initializefirebase();
const Usefirebase = () => {
  const [user, setuser] = useState({});
  const [isloding, setisloding] = useState(true);
  const [isadmin, setisadmin] = useState(false);
  const auth = getAuth();

  // create password based account
  const createaccount = (email, password, name) => {
    setisloding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name.firstName,
        })
          .then(() => {
            saveuserdata(name.firstName, email, "POST");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setisloding(false));
  };

  // log in with password
  const passwordlogin = (email, password, history, redirect_URL) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // google log in
  const googlelogin = (history, redirect_URL) => {
    setisloding(true);
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        saveuserdata(result.user.displayName, result.user.email, "PUT");
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setisloding(false));
  };

  // on user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
          .then(function (idToken) {
            localStorage.setItem("token", idToken);
          })
          .catch(function (error) {
            console.log(error.message);
          });
        setuser(user);
      } else {
        setuser({});
      }
      setisloding(false);
    });
  }, []);

  // log out
  const logout = () => {
    setisloding(true);
    signOut(auth)
      .then(() => {
        setuser({});
      })
      .catch((error) => {
        console.log("logout >", error.message);
      })
      .finally(() => setisloding(false));
  };

  // save user data on database
  const saveuserdata = (name, email, method) => {
    const data = { name, email };
    fetch("http://localhost:7000/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // get admin roll
  useEffect(() => {
    if (user.email) {
      axios
        .get(`http://localhost:7000/admin/isadmin?email=${user.email}`)
        .then((data) => setisadmin(data.data));
    }
  }, [user.email]);

  console.log(user);

  return {
    user,
    googlelogin,
    logout,
    isloding,
    createaccount,
    passwordlogin,
    isadmin,
  };
};

export default Usefirebase;

// chaking

// const chaking = (name, email) => {
//   const data = { name: name, email };
//   // fetch("http://localhost:7000/user", {
//   //   method: "POST",
//   //   "content-type": "application/json",
//   //   body: JSON.stringify(data),
//   // });
//   axios
//     .POST("http://localhost:7000/user", { data })
//     .then((data) => console.log(data));

//   console.log(name, email);
// };
