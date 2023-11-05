import { useState } from "react";

function Filter({user,setUser}) {
    const [userFilter, setUserFilter ]= useState('');
    
    const handlerUserId= (event)=>  {
        setUserFilter(event.target.value)
    }
    const handlerFilterClinck= ()=>{
        const filterUser = user.find((user)=> user.id===parseInt(userFilter,10));
        if(filterUser){
            setUser(filterUser);
        }else{
        
            setUser(null);
        }   
    }

    return(
        <div>
            <input type="number" placeholder="escribe el id" onChange={handlerUserId}/>
            <button onClick={handlerFilterClinck}>filtar el id</button>
        </div>
    )
}
export default Filter;