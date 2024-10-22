import React from "react";
import Lampa from "./Lampa.js";

function Jatekter(props){
/*     function katt(adat){
        props.katt(adat)
    } */
    return(
        <>
        {props.lista.map((jel, index)=>{
            return (<Lampa jel={jel} key={index} index={index}/>)    
        })}
    </>
    );
}

export default Jatekter;