import React from 'react'

export default function Table({t_head = [], children}){
    return(
        <div className="c-tbl-main">
            <table>
                <tbody>
                    <tr>
                        {
                            t_head.map((item, index) =>
                                <th key={index}>{item}</th>
                            )
                        }
                    </tr>
                    {children}
                </tbody>
            </table>
        </div>
    )
}
