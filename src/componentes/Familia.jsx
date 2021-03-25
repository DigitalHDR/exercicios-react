import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
        <h2>Família</h2>
        {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, { ...props })
        })}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children,
        {sobrenome: props.sobrenome})} */}
    </div>