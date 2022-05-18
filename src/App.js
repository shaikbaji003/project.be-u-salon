import React, { useEffect, useState } from 'react'

import './App.css';
import CardList from './CardList';

function App() {
  const[value,setvalue]=useState("");
  const[post,setpost]=useState([]);
  const [filterData,setFilterData]=useState([]);

  useEffect(()=>{
    fetch(` https://jsonplaceholder.typicode.com/posts`)
    .then(res=> res.json())
    .then(data=>{
      setpost(data)
      setFilterData(data)
    })

  },[])

  const searchfilter=(search)=>{
    setFilterData(post.filter((e)=>{
      return e['title'].toLowerCase().includes(search.toLowerCase())
    }))
  }
  console.log(post);
  return (
    <div>
      <center>
        <h1>Post Data</h1>
        <input className='search' type="text" placeholder='Search...' value={value} onChange={(e)=>{setvalue(e.target.value)}}/>&nbsp;&nbsp;
        <button className='btn' onClick={()=> searchfilter(value)}>Search</button>
        <CardList posts={filterData}/>

      </center>
    </div>
  )
}

export default App