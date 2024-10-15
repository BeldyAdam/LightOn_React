import Lampa from "./Lampa.js";

export default function Jatekter(props){
    function katt(adat){
        props.katt(adat)
    }
    return(
        <>
        {props.lista.map((elem, index)=>{
            return (<Lampa jel={elem} key={index} index={index} katt={katt}/>)    
        })}
    </>
    )
}