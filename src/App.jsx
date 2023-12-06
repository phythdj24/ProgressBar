/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

import './App.css'
// import SearchBar from './components/SearchBar'
// import SearchResultList from './components/SearchResultList'
import ProgressBar from './components/ProgressBar'


const totalMs = 20 * 1000
const intrval = 1 * 1000
const totalCycle = totalMs / intrval
const ProgressMade = (intrval / totalMs) * 100

function App() {
  
// const [results , setResults] = useState([])
const [progress, setProgress] = useState(0)
const timer = useRef()
const cyclseCompleted = useRef(0)
useEffect(()=>{
         timer.current = setInterval(()=>{
          setProgress((prevProgress)=> prevProgress + ProgressMade)
          cyclseCompleted.current += 1
          if(cyclseCompleted.current === totalCycle) clearInterval(timer.current )

         },intrval)
         return ()=>{
          clearInterval(timer.current)
         }
},[])
  return (
 
    <div className='App'>
     <ProgressBar progress={progress} />







     {/* <div className="serach-bar-cont">
         <SearchBar setResults={setResults} />
         <SearchResultList results={results} />
      </div>
     */} 
    </div>
  )
}

export default App
