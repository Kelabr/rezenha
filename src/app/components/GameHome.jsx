'use client'

import { useContext, useEffect, useRef, useState } from "react"
import { GoogleContext } from "@/context/GoogleContext"
import Image from "next/image"
import { useRouter} from "next/navigation";

export default function GameHome(){

    const [isAuthenticated,setisAuthenticated] = useState(false)
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState(null)

    const router = useRouter()

    const menuRef = useRef(null)

    const {exitGoogleLogin} = useContext(GoogleContext)


    useEffect(()=>{

        const nameSession = sessionStorage.getItem('@AuthWithGoogle:name')
        const photoSession = sessionStorage.getItem('@AuthWithGoogle:photo')

        const nameSessionFacebook = sessionStorage.getItem('@AuthWithFacebook:name')
        const photoSessionFacebook = sessionStorage.getItem('@AuthWithFacebook:photo')

        if(nameSession){
            setName(nameSession)
            setPhoto(photoSession)
        }else if(nameSessionFacebook){
            setName(nameSessionFacebook)
            setPhoto(photoSessionFacebook)
        }   
      


        const token = sessionStorage.getItem('@AuthWithGoogle:token')
        const tokenFacebook = sessionStorage.getItem('@AuthWithFacebook:token')

        if(!token && !tokenFacebook){
            router.push('/')
        }else{
            setisAuthenticated(true)
        }

    },[])

    if (!isAuthenticated) {
        return (<p></p>)
    }

    function openMenu(){
        menuRef.current.classList.toggle('h-16')
    }


    return(
            <div className="bg-colorprimary h-1/4 p-2 w-full ">
                <div>
                    <div className=" flex w-full justify-between">
                        <Image
                        src='/menuHamburguer.svg'
                        height={30}
                        width={30}
                        alt="icone Menu"
                        onClick={openMenu}
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

                <div className="bg-slate-500 mt-2 h-0 transform ease-in-out duration-300 overflow-hidden px-2" ref={menuRef}>
                    <p className="text-white">Bem vindo: {name} </p>
                    <p className="text-white" onClick={exitGoogleLogin}>Sair</p>
                </div>


                <div className="overflow-hidden h-0">
                    <p className="text-white">Bem vindo: {name} </p>
                    <p className="text-white" onClick={exitGoogleLogin}>Sair</p>
                </div>

            </div>
    )
}