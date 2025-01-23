'use client'

import { createContext, useState } from "react";
import { auth } from "@/services/firebase/firebaseConfig";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useRouter } from "next/navigation";

export const GoogleContext = createContext()

export function GoogleProvider({children}){

    const [name, setName] = useState('') //Armazena o valor do nome do usuário para passar via contexto

    const router = useRouter()



    async function googleLogin(){

        const provider = new GoogleAuthProvider();

        const data =  await signInWithPopup(auth, provider)

        console.log(data)

        const {user} = data
        const {accessToken} = user

        sessionStorage.setItem('@AuthWithGoogle:token', accessToken)
        sessionStorage.setItem('@AuthWithGoogle:name', user.displayName)
        sessionStorage.setItem('@AuthWithGoogle:email', user.email)
        sessionStorage.setItem('@AuthWithGoogle:photo', user.photoURL)

        setName(user.displayName)

        router.push('/game')

    }



    function exitGoogleLogin(){
        sessionStorage.clear()
        router.push('/')
    }



    const values = { //Objeto que é fornecido para o 'GoogleContex.Provider' na propriedade 'value' para que os valores dentro, dentro do objeto, sejam compartilhados via contexto
        googleLogin,
        exitGoogleLogin,
        name
    }



    return (
        <GoogleContext.Provider value={values}>
            {children}       
        </GoogleContext.Provider>
    )

 
    

}
