import { useState } from "react";




function Contadors() {
    const [contar, setContar]= useState(0);

   return(
    <div>
        <h2>Contador: {contar}
            <input type="button" onClick={()=>setContar(contar +1)} value="+"/>
            <input type="button" onClick={()=>setContar(contar -1)} value="-" />
            <input type="button" onClick={()=>setContar(contar +0)} value="reset" />
              </h2>
    </div>
   ) 
    
}
export default Contadors;