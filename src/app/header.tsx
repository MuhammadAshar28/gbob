import Image from "next/image";
import Link from "next/link";

export default function () {
    return (

        <header className="flex bg-gray-400 justify-between h-[137] w-3/4 border-rounded-lg ">
            <div >
                <Image src="/logo.png" alt="logo"  width={150} height={150} className="flex ml-8 mt-2"></Image>
            </div>



            <div>
            <nav>
        <ul className="flex gap-7  text-2xl mt-5 mr-5 font-semibold ">

            <li>
            <Link href="/">Home</Link></li>
            <li>
            <Link href="/about">About</Link></li>
            <li>
            <Link href="contact">Contact</Link></li>
            
                
        </ul>
    </nav>
    </div>
        </header>

    );
};