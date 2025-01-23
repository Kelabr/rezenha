'use client'

import { useContext, useEffect, useState } from "react"
import { GoogleContext } from "@/context/GoogleContext"
import Image from "next/image"

export default function GameHome(){

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState(null)

    const {exitGoogleLogin} = useContext(GoogleContext)


    useEffect(()=>{

        const nameSession = sessionStorage.getItem('@AuthWithGoogle:name')
        const photoSession = sessionStorage.getItem('@AuthWithGoogle:photo')

        setName(nameSession)
        setPhoto(photoSession)



    },[])





    return(
            <div className="bg-colorprimary h-1/4 p-2 w-full ">
                <div>
                    <div className=" flex w-full justify-between">
                        <Image
                        src='/menuHamburguer.svg'
                        height={30}
                        width={30}
                        alt="icone Menu"
                        />

                    {
                        photo ? (
                            <Image
                                className="rounded-3xl"
                                src={photo}
                                height={30}
                                width={30}
                                alt="Imagem de perfil"
                            />
                        ) : (<p></p>)
                    }
                        


                    </div>
                </div>


                <p className="text-white">Bem vindo: {name} </p>
                <p className="text-white" onClick={exitGoogleLogin}>Sair</p>
            </div>
    )
}