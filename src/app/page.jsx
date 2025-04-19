import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400']
})
export default function Home() {
  return (
    <>
     <h1 className={`text-green-600 text-center ${poppins.className}`}>This is your Home page</h1>
    <Image 
    src='https://media.istockphoto.com/id/1796374503/photo/the-lion-king.jpg?s=612x612&w=0&k=20&c=wDcyZj9yM1-7cCahtCn1SWnu_DGJsOHzlqWt6SSllzU=' 
    width={500}
    height={500}
    alt="lion"
    className="mx-auto mt-5"
    />
    </>
  );
}
