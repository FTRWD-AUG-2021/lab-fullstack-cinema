import React from 'react';
import axios from "axios"
import { useState } from 'react';




const NewMovie = () => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("")
    const [image, setImage] = useState("")


 
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let result = await axios.post('http://localhost:5000/AddMovie', {
            title: title, director:director, image:image
        })
        
    }







    return (
        <div>
        New Movie  

        <form onSubmit={handleSubmit}>
            <input placeholder="title" onChange={(e) => setTitle (e.target.value)}></input>
            <input placeholder="director"onChange={(e) => setDirector (e.target.value)}></input>
            <input placeholder="image"onChange={(e) => setImage (e.target.value)}></input>
            <button> Add new Movie</button>
        </form>  
        </div>
    );
};

export default NewMovie;