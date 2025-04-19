import { NextResponse } from "next/server"
import { dummyUsers } from "../route"

export async function GET(req,content) {
    try {
     const {user} = await content.params
     const userInfo = dummyUsers.filter(item => item.id?.toString() === user)
     return NextResponse.json({
          userInfo,
          succss : true
     },{status: 200})
    } catch (error) {
      return NextResponse.json(
                    {
                         success : false,
                         message : 'Something Broke!'
                    },{ status : 500}
               )
    }
}