import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations]=useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(res=>{
            console.log(res)
            setLocations(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return(
        <section className="Location-list">
            {locations.map(loc=>(
                <div key={loc.id}>
                    
                    <h3>{loc.name}</h3>
                    <h4>{loc.type}</h4>
                    <h5>{`${loc.residents.length} resdients`}</h5>
                </div>
            ))}
        </section>
    )
}
