/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const SearchBar = (setResults) => {

    const [input, setInput] = useState('')
    const fetchData = (value) =>{
           fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=>response.json())
           .then(json => {
            const results = json.filter((user)=>{
              return user && user.name && user.name.toLowerCase().includes(value)
            })
            setResults(results)
           })
    }

    const HandleChange = (value)=>{
        setInput(value)
        fetchData(value)
    }
  return (
    <div className='input-wrapper'>
        
        <input type="text" value={input} onChange={(e)=> HandleChange(e.target.value)} placeholder='Type To Search' />
        <button className='icon'>🔍</button>
    </div>
  )
}

export default SearchBar