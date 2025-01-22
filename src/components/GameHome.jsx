'use client'

import { useContext, useState } from "react"
import { GoogleContext } from "@/context/GoogleContext"

export default function GameHome(){

   


    const {exitGoogleLogin, name} = useContext(GoogleContext)

    return(
        <>
            <p>Bem vindo: {name} </p>
            <p onClick={exitGoogleLogin}>Sair</p>
        </>
    )
}