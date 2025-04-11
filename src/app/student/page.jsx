import Link from 'next/link'
const page = () => {
     const students = [
          { id: 1, name: "Ayaan Rahman", age: 16, grade: "10th", email: "ayaan@example.com" },
          { id: 2, name: "Mira Khan", age: 17, grade: "11th", email: "mira@example.com" },
          { id: 3, name: "Rafiul Islam", age: 15, grade: "9th", email: "rafiul@example.com" },
          { id: 4, name: "Tania Akter", age: 18, grade: "12th", email: "tania@example.com" },
          { id: 5, name: "Sajid Hossain", age: 16, grade: "10th", email: "sajid@example.com" },
          { id: 6, name: "Nusrat Jahan", age: 17, grade: "11th", email: "nusrat@example.com" },
          { id: 7, name: "Farhan Ahmed", age: 15, grade: "9th", email: "farhan@example.com" },
          { id: 8, name: "Priya Das", age: 18, grade: "12th", email: "priya@example.com" },
          { id: 9, name: "Imran Chowdhury", age: 17, grade: "11th", email: "imran@example.com" },
          { id: 10, name: "Lamia Noor", age: 16, grade: "10th", email: "lamia@example.com" }
        ];
  return (
    <div>
     <nav className='flex flex-col gap-2'>
          {
               students.map((student,index)=>{
                   return <Link key={index} href={`/student/${student.id}`}>{student.name}</Link>
               })
          }
     </nav>
    </div>
  )
}

export default page
