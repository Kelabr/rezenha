'use client'

export default function Login(){
    return(
        <div className="flex flex-col w-">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <button type="submit">Entrar</button>
        </div>
    )
}