import { use } from "react"

const page = (props) => {
  const {studentDetails} = use(props.params)
  return (
    <div> 
      <h1>ID : {studentDetails}</h1>
    </div>
  )
}

export default page
