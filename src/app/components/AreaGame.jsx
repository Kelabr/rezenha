import { Consult } from "@/services/firebase/firebaseQuery"
import TextoCard from "./TextoCard"

export default async function AreaGame(){

    const Data = await Consult()

    console.log(Data[0])


    return(
        <div className="h-screen flex justify-center items-center p-4">
            <div className="w-full h-1/2 bg-orange-500 rounded-xl flex justify-center items-center">
                <TextoCard data={Data}/>
            </div>
        </div>
    )
}