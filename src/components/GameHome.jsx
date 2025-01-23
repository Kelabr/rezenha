'use client'

import { useContext, useEffect, useState } from "react"
import { GoogleContext } from "@/context/GoogleContext"

export default function GameHome(){

    const [name, setName] = useState('')

    const {exitGoogleLogin} = useContext(GoogleContext)


    useEffect(()=>{
        const nameSession = sessionStorage.getItem('@AuthWithGoogle:name')
        setName(nameSession)
    },[])



    return(
            <div className="bg-colorprimary h-1/4 p-2 ">
                <p className="text-white">Bem vindo: {name} </p>
                <p className="text-white" onClick={exitGoogleLogin}>Sair</p>
            </div>
    )
}