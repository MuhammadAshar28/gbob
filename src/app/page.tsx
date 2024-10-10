import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-40 mx-10">  
       <section className="flex gap-6 items-center">
        <div className="flex-1">

      <h1 className="text-5xl font-bold">
        Change is the end <br />
        result of all true <br />
         learning</h1>
         <p className="text-lg text-gray-600 mt-2">
            An investment and knowledge pays <br />
            the best interests.
          </p>
          <button className="bg-gray-900 text-white py-2 mt-4 px-4" >GEt started</button>
        </div>
        <div className="flex-1">
          <Image width={500} height={500} 
          src="/heroimage1.png" alt="Minimalist Desk" />
        </div>

         </section>
    </main>
  );
}
