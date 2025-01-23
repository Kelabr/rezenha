import GameHome from "@/app/components/GameHome"
import AreaCard from "../components/AreaCard"

export default function Game(){
    return(
        <div className="h-screen bg-slate-500">
            <GameHome/>
            <AreaCard/>
        </div>
            
    )
}