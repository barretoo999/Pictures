import React from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import SearchImage from './api'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) =>{
    console.log('usted esta buscado: ' , term)
    const result = await SearchImage(term)
    setImages(result)

  }
  return (
    <div>
        <h1>App</h1>
        <SearchBar onSubmit ={handleSubmit}/>
        <ImageList images={images}/>
    </div>
  )
}

export default App