import React from 'react'
import ReactDOM from 'react-dom'
import ComponentClasse from './componentes/ComponenteClasse'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import MultiElementos from './componentes/MultiElementos'
// import Primeiro from './componentes/PrimeiroComponente copy'
// import {CompA, CompB} from './componentes/SegundoComponente'

ReactDOM.render(
    <React.Fragment>
        <ComponentClasse  />
        {/* <Familia sobrenome="Pereira" numero={123}>
            <Membro nome="Andre" />
            <Membro nome="Mariana"/>
        </Familia> */}
        {/* <FamiliaSilva sobrenome="Silva Pereira" /> */}
        {/* <MultiElementos /> */}
        {/* <Primeiro valor="Bom dia!"  acbd={123} />
        <CompA valor='oi' />
        <CompB valor='oi098' /> */}
    </React.Fragment>
, document.getElementById('root'))