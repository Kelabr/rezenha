import Image from "next/image";

export default function Home() {
  return (
   <>
   <main className="h-screen">
    <div className="h-2/6  bg-slate-500 p-3 flex justify-center ">
        <div className=" h-full flex">
            <Image
            src='/logo.svg'
            height={150}
            width={150}
            alt="Logo rezenha"
            />
            <div className="h-full flex justify-center items-center">
              <span className=" text-white leading-10 text-5xl font-bold">
                Re<br></br>
                ze<br></br>
                nha
              </span>
            </div>
          </div>
      </div>
   </main>



   </>
  );
}
