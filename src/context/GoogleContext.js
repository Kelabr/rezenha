'use client'

import { createContext } from "react";
import { auth } from "@/services/firebase/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useRouter } from "next/navigation";

export const GoogleContext = createContext()

export function GoogleProvider({children}){

    const router = useRouter()

    async function googleLogin(){

        const provider = new GoogleAuthProvider();

        const data =  await signInWithPopup(auth, provider)

        const {user} = data
        const {accessToken} = user

        sessionStorage.setItem('@AuthWithGoogle:token', accessToken)
        sessionStorage.setItem('@AuthWithGoogle:name', user.displayName)
        sessionStorage.setItem('@AuthWithGoogle:email', user.email)

        router.push('/game')

    }

    const values = {
        googleLogin
    }

    return (
        <GoogleContext.Provider value={values}>
            {children}       
        </GoogleContext.Provider>
    )

 
    

}
