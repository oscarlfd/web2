import {useState} from "react";
import Botom from "./Boton";


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
        <Botom onClick={() => imputNumber(0)}> 0 </Botom>
        <Botom onClick={() => imputNumber(1)}> 1 </Botom>
        <Botom onClick={() => imputNumber(2)}> 2 </Botom>
        <Botom onClick={() => imputNumber(3)}> 3 </Botom>
        <Botom onClick={() => imputNumber(4)}> 4 </Botom>
        <Botom onClick={() => imputNumber(5)}> 5 </Botom>
        <Botom onClick={() => imputNumber(6)}> 6 </Botom>
        <Botom onClick={() => imputNumber(7)}> 7 </Botom>
        <Botom onClick={() => imputNumber(8)}> 8 </Botom>
        <Botom onClick={() => imputNumber(9)}> 9 </Botom>
    </div>
);

};

export default Contador;