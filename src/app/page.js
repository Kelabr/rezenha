import Image from "next/image";
import Start from "./components/Start";

export default function Home() {
  return (
   <>
   <main className="h-screen w-full  relative">
    <div className="h-2/6  bg-colorprimary w-full p-3 flex justify-center ">
        <div className=" h-full flex">
            <Image
            src='/logo.svg'
            height={150}
            width={150}
            alt="Logo rezenha"
            className="mr-2"
            />
            <div className="h-full flex justify-center items-center relative">
              <span className=" text-white leading-11 text-5xl font-medium">
                RE<br></br>
                ZE<br></br>
                NHA
              </span>
            </div>
          </div>
      </div>
      <div className="h-[580px] flex flex-col  w-full  bg-white bottom-0 absolute rounded-t-2xl px-3 ">
        <Start/>
      </div>
   </main>



   </>
  );
}
