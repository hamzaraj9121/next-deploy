"use client"
import Link from "next/link";



export default function Home (){
    return <div>
       <h1> Fetch data Api</h1>
    <Link href={"/products"}> Go to Product List</Link> 
       

       </div>

}
