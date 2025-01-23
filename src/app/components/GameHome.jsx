'use client'

import { useContext, useEffect, useState } from "react"
import { GoogleContext } from "@/context/GoogleContext"
import Image from "next/image"

export default function GameHome(){

    const [name, setName] = useState('')

    const {exitGoogleLogin} = useContext(GoogleContext)


    useEffect(()=>{
        const nameSession = sessionStorage.getItem('@AuthWithGoogle:name')
        setName(nameSession)

    },[])



    return(
            <div className="bg-colorprimary h-1/4 p-2 ">
                <div>
                    <div>
                        <Image
                        src='/menuHamburguer.svg'
                        height={30}
                        width={30}
                        alt="icone Menu"
                        />
                    </div>
                </div>


                <p className="text-white">Bem vindo: {name} </p>
                <p className="text-white" onClick={exitGoogleLogin}>Sair</p>
            </div>
    )
}