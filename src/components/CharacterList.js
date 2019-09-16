import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route,Link} from "react-router-dom";


// import src from "*.svg";
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters,setCharacters]=useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res=>{
      // console.log(res)
      setCharacters(res.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);

  return (
    <section className="character-list grid-view">
        {characters.map(char=>(
          <div key={char.id}>
            <img src={char.image} alt="character image"/>
            <h2>{char.name}</h2>
            <h5>{char.species} {char.status}</h5>
            <h4> {`Location : ${char.location.name}`}</h4>
            <h4> {`Origin : ${char.location.name}`}</h4>
            <h4>Episodes</h4>
            <Link to={`/characterlist/${char.id}`}>{char.name}</Link>
          </div>
         
        ))}  
        
        
    </section>
  );
}
