import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
 

  const [searchbar, setSearchBar] = useState("");

  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <SearchBar value={searchbar} onsearchbar={setSearchBar} />
  
     
    </>
  )
}

export default App
