import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const Authprovider = ({children}) => {

    //state for manage user
    const [user,setUser] = useState(null)
    //state for manage loading
    const [loading,setLoading] = useState(true)

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


    const authInfo = {handleGoogleLogin,logOut,user,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Authprovider;