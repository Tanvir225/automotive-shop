import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    //state for manage user
    const [user,setUser] = useState(null)
    //state for manage loading
    const [loading,setLoading] = useState(true)

    //create a user
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login user
    const logUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //google Login 
    const handleGoogleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    //logout a user
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }



    //observer a user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('observer user',currentUser);
            setLoading(false)
        })

        return ()=> unSubscribe()
    },[])


    const authInfo = {handleGoogleLogin,logOut,user,loading,createUser,logUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;