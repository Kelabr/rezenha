import GameHome from "@/app/components/GameHome"
import AreaCard from "../components/AreaCard"

export default async function Game(){

    return(
        <div className="h-screen">
            <GameHome/>
            <AreaCard/>
        </div>
            
    )
}