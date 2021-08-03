import React from "react"

const scaleNames={
c: "Celsius",
f: "fahrenheit"

};

export default function TemperatureInput({temperature, scale, onTemperaureChange}) {


  
    return(

      <fieldset>
         <legends>Enter temperature in  {scaleNames[scale]}:</legends> 
         <input
          type="text"
           value={temperature} 
           onChange={(e)=>onTemperaureChange(e, scale) }/>
      </fieldset>


    );
    
   
       
    
}