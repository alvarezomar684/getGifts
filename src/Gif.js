import React, { useEffect, useState } from 'react'
import { GiftItem } from './GiftItem';

const SearchBox = ({onSearch}) =>{
    const [busqueda,setBusqueda] = useState("")
    return(
        <div>
            <input value={busqueda}  onChange={(e) => setBusqueda(e.target.value) } />
            <button onClick={() => {onSearch(busqueda)}} >Search</button>
        </div>
    )
}

export const Gif = () => {

    
    const [searchTerm,setSearchTerm] = useState ("")
    const [title,setTitle] = useState("")
    const [imgUrl,setImgUrl] = useState("")

   

    useEffect(() => {

        if(searchTerm){

            const logic = async () => {
                const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchTerm )}&limit=10&api_key=oAilDgJZfgzg38LMTGIGtmpDf8sH7FEX`
                const response = await fetch(url).then(res => res.json())
                console.log(response.data[0])
                setTitle(response.data[0].title)
                setImgUrl(response.data[0].images.original.url)
    
            }
            logic()

        }
        
    },[searchTerm])

    return (
        <div>
            <SearchBox onSearch={setSearchTerm}/>
            <GiftItem  title={title} imgUrl={imgUrl} />
        </div>
    )
}
