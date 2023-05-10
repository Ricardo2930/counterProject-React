import { useState } from "react";

function Counter () {
    //El estado
        //const [valor 1, setvalor1] = useState(valor inicial)
            //contador es una propiedad del estado
                //setcontador -> es un dispacht para actualizar el valor del estado
    const [contador , setContador] = useState(0)

    const incrementar = () => { setContador (contador + 1)}
    const reiniciar = () => {setContador(0)}
    const decrementar = () => { if(contador==0){return} else{setContador (contador - 1)}}

    return (
        <div>
            <h1>CONTADOR📝</h1>
            <h2>
                {contador}
            </h2>
            
            {/* usando el evento onClick. Al hacer click en el boton se ejecutara la funcion setContador y se actualizara a el valor actual del contador+1 */}
            <div class="btn">
                <button class="incrementar" onClick={incrementar}>⏫Incrementar</button>
                <button class="reiniciar" onClick={reiniciar}>🔴Reiniciar</button>
                <button class="decrementar" onClick={decrementar}>⏬Decrementar</button>  
            </div>
             
        </div>
    )
}

export default Counter;