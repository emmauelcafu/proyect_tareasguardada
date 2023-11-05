import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Filter from "../filtrado/filtrado.conponent"


import "./caider.css"

function Caider() {
  const [user, setUser] = useState([]);
const[filterid, serFilterid]= useState(null);

  useEffect(()=>{
    const dataApi = async () => {
        const dataAll = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const dataFilter = dataAll.data;
    
       setUser(dataFilter)
      };
    
      dataApi()

  },[])


  

  return (
    <div className="div_component">
      <Filter user={user} setUser={serFilterid} />

      {filterid? (<div className="div_cards">
          <p>id: {filterid.id}</p>
           <p>name: {filterid.name}</p>
           <p>correo: {filterid.email}</p>
        </div>):(  user.map((user)=>(
            <div className="div_cards">
                <p>id: {user.id}</p>
                <p>name:{user.name}</p>
                <p>correo:{user.email}</p>
            </div>
        )))}

      

      </div>
  );
}

export default Caider;
