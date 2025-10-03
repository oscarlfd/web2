import {useState} from "react";
import Boton from "./Boton";


const Contador = () =>{
    const [contador, setContador]= useState(0);
    function Aumentar(){
        setContador(contador+1);
    }

const imputNumber = (num) => setContador(num);

return(
    <div>
        <label>Contador:{contador}</label>
        <br />
        <button onClick={Aumentar}>Aumentar</button>
        <Boton onClick={() => imputNumber(0)}> 0 </Boton>
        <Boton onClick={() => imputNumber(1)}> 1 </Boton>
        <Boton onClick={() => imputNumber(2)}> 2 </Boton>
        <Boton onClick={() => imputNumber(3)}> 3 </Boton>
        <Boton onClick={() => imputNumber(4)}> 4 </Boton>
        <Boton onClick={() => imputNumber(5)}> 5 </Boton>
        <Boton onClick={() => imputNumber(6)}> 6 </Boton>
        <Boton onClick={() => imputNumber(7)}> 7 </Boton>
        <Boton onClick={() => imputNumber(8)}> 8 </Boton>
        <Boton onClick={() => imputNumber(9)}> 9 </Boton>
    </div>
);

};

export default Contador;