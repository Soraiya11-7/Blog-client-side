

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import axios from "axios";
const auth = getAuth(app);

export const AuthProviderContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [darkMode, setDarkMode] = useState(false);


const  name = 'Blog';
//create new user
const createUser = (email, password ) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

//signout user
const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
}

//signIn with email,secret key
const loginUser = (email, password ) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
//update User Profile info
const updateUserProfile = (updatedData) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData).finally(() => setLoading(false));
}
//signIn with Google
const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
}

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        if (currentUser?.email) {
            const user = { email: currentUser.email }

            axios.post('https://assignment-11-server-one-kohl.vercel.app/jwt', user, { withCredentials: true })
                .then(res => {
                    // console.log('login token', res.data);
                    setLoading(false);
                })
        }
        else{
            //logout
            
            axios.post('https://assignment-11-server-one-kohl.vercel.app/logout', {}, { withCredentials: true })
                .then(res => {
                    // console.log('logout',res.data);
                    setLoading(false);
                })
        }
        setLoading(false);
      
        })
        return () => {
            unSubscribe();
        }

} ,[]);

const authInfo = {
    name,
    user,
    darkMode, 
    setDarkMode,
    loading,
    setLoading,
    setUser,
    createUser,
    loginUser,
    updateUserProfile,
    signInWithGoogle,
    signOutUser,
}
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;