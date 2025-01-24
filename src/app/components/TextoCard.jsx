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
        }else{
            refButton.current.classList.toggle('hidden')
            refButtonPlus.current.classList.toggle('hidden')
        }
 

        // if(values >=2){
        //     setButton('')
        //     setValue(0)
        // }
    }




    return(
        <div className=" flex flex-col">
            {data[values].per}
            <button ref={refButtonPlus}  onClick={plusCard} className="">{button}</button>
            <Link href='/game'><button ref={refButton} className="hidden">Voltar</button></Link>
        </div>
        

    )
}