import React from 'react'

export default function Input(props){
    return (
        <input
            onChange={(e) => props.handleChange(e)}
            type={props.type}
            name={props.name}
            readOnly = {props.readOnly}
            placeholder={props.placeholder}
            id={props.id}
                className={
                    `inpt
                    ${props.isDanger == false ? '' : 'inpt-danger icn-danger '}`
                    +props.className
                }
            value={props.value}
        />
    )
}
