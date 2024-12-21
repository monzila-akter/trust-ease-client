
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebse_init";




export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
 } 
 
 const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }

 const logOut = () => {
    setLoading(true)
    setUser(null);
   return signOut(auth);
 }

 const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
 }

 const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
 }

const authInfo = {
   user,
   setUser,
   createNewUser,
   logOut,
   loginUser,
   loading,
   updateUserProfile,
   googleLogin
}


 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('currentUser', currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
 }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;