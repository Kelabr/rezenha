'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"


export default function TextoCard({data, cont}){

    const [values, setValue] = useState(0)
    const [rodadas, setRodadas] = useState(0)
    const refButton = useRef()
    const refButtonPlus = useRef()
    const reftexto = useRef()

    useEffect(() => {
           
        // if(values === 2){
        //     refButton.current.classList.toggle('hidden')
        //     refButtonPlus.current.classList.toggle('hidden')
        // }

        if(rodadas === 8){
            refButton.current.classList.toggle('hidden')
            refButtonPlus.current.classList.toggle('hidden')
            reftexto.current.classList.toggle('hidden')
        }

    },[rodadas])


    function plusCard(){

        // const inexRamdom = Math.floor(Math.random() * Number(cont))


        // if(values < 5){

        //     setValue(inexRamdom)
        // }

        // if(inexRamdom === values && cont > 1){
        //     plusCard()
        //     return
        // }

        let inexRamdom = 0

        do {
            inexRamdom = Math.floor(Math.random() * Number(cont))
        }while(inexRamdom === values)

        setValue(inexRamdom)


        setRodadas(prev => prev + 1)
        
    }



    return(
        <div className=" flex flex-col justify-center items-center">
            <div className="px-2 w-full ">
                <p ref={reftexto} className="font-medium text-center">{data[values].per}</p>
            </div>
  
            <button ref={refButtonPlus}  onClick={plusCard} className="bg-white p-1 w-1/3 mt-4 rounded-lg">Plus</button>
            <Link href='/game' className="w-full"><button ref={refButton} className="hidden w-full p-1 mt-2 bg-white rounded-lg">Voltar</button></Link>
        </div>
        

    )
}