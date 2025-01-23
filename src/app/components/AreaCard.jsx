'use client'

import Card from "@/app/ui/Card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function AreaCard(){

    const [isAuthenticated,setisAuthenticated] = useState(false)
    const router = useRouter()

    

    useEffect(()=>{
        const token = sessionStorage.getItem('@AuthWithGoogle:token')

        if(!token){
            router.push('/')
        }else{
            setisAuthenticated(true)
        }
    },[])

    if (!isAuthenticated) {
        return (<p>Carregando...</p>)
    }


    return(

        <div className="h-3/4 p-2">
            <Card/>
        </div>
    )
}