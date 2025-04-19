import { NextResponse } from "next/server"

const dummyUsers = [{ id: 1, name: 'Asraful Islam', email: 'asraful@example.com', role: 'admin' },
{ id: 2, name: 'Sarah Khan', email: 'sarah@example.com', role: 'editor' },
{ id: 3, name: 'John Doe', email: 'john@example.com', role: 'user' },
{ id: 4, name: 'Mehedi Hasan', email: 'mehedi@example.com', role: 'user' },
{ id: 5, name: 'Anika Rahman', email: 'anika@example.com', role: 'manager' }]

export async function GET(req,content){
     try {
          return NextResponse.json(
               {
                    success : true,
                    users : dummyUsers
               },{ status : 200}
          )
     } catch (error) {
          return NextResponse.json(
               {
                    success : false,
                    message : 'Something Broke!'
               },{ status : 500}
          )
     }
}