import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/PrimeiroComponente copy'
import {CompA, CompB} from './componentes/SegundoComponente'


ReactDOM.render(
    <div>
        <Primeiro valor="Bom dia!"  acbd={123} />
        <CompA valor='oi' />
        <CompB valor='oi098' />
    </div>
, document.getElementById('root'))