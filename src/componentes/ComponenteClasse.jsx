import React, { Component } from 'react'

export default class ComponentClasse extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.valor  || 'Padão'}</h1>
            </div>
        )
    }
}