import React, { useState, useEffect } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [contador, setContador] = useState(100)
    const [parImpar, setParImpar] = useState('Par')

    // eslint-disable-next-line
    useEffect(() => {
        // % 2 === 0    resto da divisão de 2 for identico a zero
        contador % 2 === 0 ? setParImpar('Par') : setParImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parImpar}</h3>
            <button onClick={() => setContador(contador + 1)} >Incremento</button>
            <button onClick={() => setContador(contador - 1)} >Decremento</button>  
        </div>
    )
}