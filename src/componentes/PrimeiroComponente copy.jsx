import React from 'react'

const isLegal = true

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <span>{props.acbd}</span>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
    </div>
