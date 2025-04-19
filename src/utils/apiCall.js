import axios from "axios";

export const apiRequest =async(method,route,data=null,headers={})=>{
     try {
          const res = await axios({
               method,
               url : 'http://localhost:3000/api'+route,
               data,
               headers
          })
          return res.data
     } catch (error) {
          console.log(error)
          throw error
     }
}