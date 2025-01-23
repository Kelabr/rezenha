import '@/app/globals.css'
import Link from 'next/link'

export default function Card(){
    return(

        <Link href='/gamestart'> 
            <main className="bg-orange-500 h-20 p-1 rounded-lg">
                <p className='font-medium'>Ola Tetse</p>
            </main>
        </Link>
    )
}