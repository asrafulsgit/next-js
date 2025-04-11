import Link from "next/link";

export default function NotFound() {
     return (
       <div className="text-red-600 flex justify-center items-center h-[80vh] flex-col gap-2">
         <h2>Not Found</h2>
         <p>Could not find requested resource</p>
         <Link href="/"><button className="border border-red-300 cursor-pointer rounded-xl py-1 px-3 ">Return Home</button></Link>
       </div>
     )
   }