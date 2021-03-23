import React from 'react'
import ReactDOM from 'react-dom'
import MultiElementos from './componentes/MultiElementos'
// import Primeiro from './componentes/PrimeiroComponente copy'
// import {CompA, CompB} from './componentes/SegundoComponente'

ReactDOM.render(
    <React.Fragment>
        <MultiElementos />
        {/* <Primeiro valor="Bom dia!"  acbd={123} />
        <CompA valor='oi' />
        <CompB valor='oi098' /> */}
    </React.Fragment>
, document.getElementById('root'))