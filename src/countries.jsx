import { useEffect, useState } from "react";
import React from "react";
import axios from "axios"

const CountryCard =({name ,flagImg ,flagAltTxt})=>{
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
            margin: "10px",
            border : "1px solid black",
            borderRadius: "8px",
            width: "200px",
            height: "200px",
        }}>
            <img src={flagImg} alt={flagAltTxt}  style={{width: "100px", height: "100px"}}/>
            <h2>{name}</h2>
        </div>
    )
}



function Countries() {
   const API_URL = "https://restcountries.com/v3.1/all"
   const [countries ,setcountries] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    useEffect (()=> {
        fetchData().then((data)=>setcountries(data))
    }, [])

    
// //Promise chaning 
// useEffect (()=>{
//     fetch(API_URL).then(res => res.json())
//     .then((data)=> setcountries(data))
//     .catch((error)=> console.error("Error:" , error))
// },[])

   return (
    <div style={{
        display :"flex",
        flexWrap: "wrap",
        alignItems:"center",
        justifyContent: "center",
        height :"100vh"
    }}>
        {countries.map((country)=>(
            <CountryCard name= {country.name.common} flagImg={ country.flags.png} flagAltTxt={country.flags.alt} />
        ))}
    </div>
   )
}


export default Countries