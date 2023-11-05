import { useState } from "react";
import { useEffect } from "react";
import axios   from "axios";


import"./card.component.css";
function Card() {
    const [user, setUser]= useState([]);

   useEffect(()=>{
        const apiUser= async()=>{
          const apiAll= await axios.get(`https://jsonplaceholder.typicode.com/users`);
            const apiData = apiAll.data[0]
           
            return apiData
            
        }
        setUser(apiUser()) 
    },[])
    
    console.log(user);
    return(
        <div className="div_component">
            <div className="div_cards"> 
                <p>id: {user.name}</p>
                <p>name:</p>
                <p>correo:</p>
            </div>
        </div>
    )
}

export default Card;