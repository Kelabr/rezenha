'use client'

import Link from "next/link"
import Image from "next/image"
import { GoogleContext } from "@/context/GoogleContext"
import { useContext } from "react"

export default function Start(){

    const {googleLogin, facebookLogin} = useContext(GoogleContext)

    return(
        <div className="flex flex-col items-center w-full mt-10">
            <div className=" h-24 w-4/5 flex flex-col items-center text-center">
                <h1 className="font-bold text-colorprimary mb-2 text-xl">Bem-vindo ao REZENHA</h1>
                <p className="text-wrap text-[14.5px] text-colortextgray font-medium">Um jogo pra tirar todo mundo do insta e dar umas risadas ou... quem sabe algo mais</p>
            </div>
            <div className="flex mt-9 w-28 justify-center">
                <Link href='#' className="cursor-pointer" onClick={googleLogin}><Image src='/logoGoogle.svg' width={40} height={40} alt="login Google"/></Link>
            </div>
        </div>
    )
}