'use client'

import { useState, useRef } from "react"
import Link from "next/link"


export default function TextoCard({data}){

    const [values, setValue] = useState(0)
    const [button, setButton] = useState('Plus')
    const refButton = useRef()
    const refButtonPlus = useRef()


    function plusCard(){
        if(values < 2){
            setValue(values + 1 )
        }

        if(values === 1){
            refButton.current.classList.toggle('hidden')
            refButtonPlus.current.classList.toggle('hidden')
        }
 

        // if(values >=2){
        //     setButton('')
        //     setValue(0)
        // }
    }




    return(
        <div className=" flex flex-col justify-center items-center">
            <div className="px-2 w-full ">
                <p className="font-medium text-center">{data[values].per}</p>
            </div>
  
            <button ref={refButtonPlus}  onClick={plusCard} className="bg-slate-300 p-1 w-1/3 mt-2">{button}</button>
            <Link href='/game' className="w-full"><button ref={refButton} className="hidden w-full p-1 mt-2 bg-slate-300">Voltar</button></Link>
        </div>
        

    )
}