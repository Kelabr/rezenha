'use client'

import { useState } from "react"


export default function TextoCard({data}){

    const [values, setValue] = useState(0)

    function plusCard(){
        setValue(values + 1 )

        if(values >= 2){
            setValue(0)
        }
    }


    return(
        <div className="-bgslate-600 flex flex-col">
            {data[values].per}
            <button onClick={plusCard}>plu</button>
        </div>
        

    )
}