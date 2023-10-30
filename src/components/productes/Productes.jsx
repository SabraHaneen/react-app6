 import React, { useEffect, useState } from 'react'
 
 export default function Productes() {
  let[products,setProducts]=useState([]);
  const getProducts=async()=>{
    let response=await fetch("https://fakestoreapi.com/products");
    let data=await response.json();
    setProducts(data);
  }
  useEffect(()=>{
    getProducts();
    },[]
  );
   return (
    <div className='row'>
      {products.map((ele)=>{
return <div className='col-md-4' key={ele.id}>
  <h2>{ele.title}</h2>
  <img src={ele.image} className='w-100'/>
</div>
      })}
   

    </div>
   )
 }
 






 /*import React, { useState } from 'react'
 
 export default function Productes() {
 let[products,setProducts]=useState(  [
    
{id:1,title:'product one',price:1000,sale:true},
{id:2,title:'product two',price:1000,sale:true},
{id:3,title:'product one',price:1000,sale:false},

]);
  return (
    <>
    {products.map((product)=>{
      return <>
      <div className='product' key={product.id}>
    <h2>{product.title}</h2>
    {product.sale? <p>Sale</p>:<p>No sale</p>}
    </div>
      </>
    })}
    
    </>
   )
 }
 */
 
 
 
 
 
 
 
 
 
 
 /*import React ,{useState} from 'react'

export default function Productes() {

 let [age,setAge]=useState(20);
 const changeAge=(a)=>{
  setAge(a);
 }
return (
  <>
      <div>Productes</div>
     <p>my age is{age}</p>
      <h2>hello my name is haneen</h2>
      <button onClick={()=>changeAge(10)}>click</button>



    </>
  )
}
 const getData=(namee)=>{
 console.log(namee)
 }
return (
    <>
        <div>Productes</div>
       <p>my age is{age}</p>
        <h2>hello my name is haneen</h2>
<button onClick={()=>getData("tariq")}>click</button>
*/