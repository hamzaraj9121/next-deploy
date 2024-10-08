"use client"

import { useEffect, useState } from "react"

export default function Page(){
    let [product, setproduct]=useState([])

    
    useEffect( () => {

       async function some(){

            let data=await fetch("https://dummyjson.com/products", {method:"GET"})
            data= await data.json();
            console.log(data);
            setproduct(data.products)
        }

        some();
        
    },[])
    return <div>
        <p>Products</p>
        {
            product.map((item)=>{
                return <h1>Name:{item.title} ,Category:{item.category},prize:{item.price}</h1>
            })
        }
        
    </div>
}