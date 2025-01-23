'use client'

import Link from "next/link"
import Image from "next/image"
import { GoogleContext } from "@/context/GoogleContext"
import { useContext } from "react"

export default function Start(){

    const {googleLogin} = useContext(GoogleContext)

    return(
        <div className="flex flex-col items-center w-full mt-10">
            <div className=" h-32 w-4/5 flex flex-col items-center text-center">
                <h1 className="font-bold text-colorprimary mb-2 text-xl">Bem-vindo ao REZENHA</h1>
                <p className="text-wrap text-[14.5px] text-colortextgray font-medium">Um jogo pra tirar todo mundo do insta e dar umas risadas ou... quem sabe algo mais</p>
            </div>
            <div className="flex flex-col items-center w-full mt-3 ">
                <Link href='#' className="w-2/3"><button className="mb-3 text-white font-medium p-1  w-full last:rounded-xl bg-colorprimary">Logar</button></Link>
                <Link href='#' className="w-2/3"><button className="mb-3 bg-backgroundgray font-medium p-1 w-full rounded-xl">Registrar</button></Link>
            </div>
            <div className="flex mt-3 w-2/6 justify-between">
                <Link href='#' className="cursor-pointer" onClick={googleLogin}><Image src='/logoGoogle.svg' width={40} height={40} alt="login Google"/></Link>
                <Link href='#'><Image src='/logo_facebook.svg' width={40} height={40} alt="login Google"/></Link>
            </div>
            <div className="mt-16">
                <Link className="text-colorprimary font-semibold underline text-sm" href='#'>Esqueci minha senha</Link>
            </div>
        </div>
    )
}