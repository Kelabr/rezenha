import '@/app/globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Card(){
    return(

        <Link href='/gamestart'> 
            <main className="bg-orange-500 h-20 p-1 rounded-lg">
                <div className="flex">
                    <Image
                    src='/cardsLogo.svg'
                    width={20}
                    height={20}
                    alt='Logo de Cartas'
                    />
                    <p className='font-medium ml-1'>Eu nunca</p>
                </div>
                <div className=' flex w-full h-1/2 justify-end items-end'>
                    <Image
                    className='mr-2'
                    src='/logoCard.svg'
                    width={25}
                    height={25}
                    alt='Logo REZENHA'
                    />
                </div>
                
            </main>
        </Link>
    )
}