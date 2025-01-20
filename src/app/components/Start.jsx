export default function Start(){
    return(
        <div className="flex flex-col items-center w-full mt-10">
            <div className=" h-32 w-4/5 flex flex-col items-center text-center">
                <h1 className="font-bold text-colorprimary mb-2 text-lg">Bem-vindo ao REZENHA</h1>
                <p className="text-wrap text-[12px] text-colortextgray font-medium">Um jogo pra tirar todo mundo do insta e dar umas risadas ou... quem sabe algo mais</p>
            </div>
            <div className="flex flex-col items-center w-full ">
                <button className="mb-3 text-white font-medium p-1 w-2/3 rounded-xl bg-colorprimary">Logar</button>
                <button className="mb-3 bg-backgroundgray font-medium p-1 w-2/3 rounded-xl">Registrar</button>
            </div>
        </div>
    )
}