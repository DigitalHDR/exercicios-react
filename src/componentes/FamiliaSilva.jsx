import React from 'react'
import Membro from './Membro'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
        <Membro nome='lucas' sobrenome={props.sobrenome} />
        <Membro nome='pabline' sobrenome={props.sobrenome} />
        <Membro nome='julia' sobrenome={props.sobrenome} />
        <Membro nome='ana' sobrenome={props.sobrenome} />
    </div>