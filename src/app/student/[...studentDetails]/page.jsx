import { use } from "react"
const page = (props) => {
  const {studentDetails} = use(props.params)
  return (
    <div> 
      <h1>Email : {studentDetails[0]}</h1>
      <h1>ID : {studentDetails[1]}</h1>
    </div>
  )
}

export default page
