import React, { useState, useEffect } from 'react';
import { Palabra } from '../interfaces/palabra';
import '../css/PrettyCode.css'

interface PrettyCodeProps {
    listadoAgrupado: Palabra[][]
}


const PrettyCode: React.FC<PrettyCodeProps> = ({ listadoAgrupado }) => {


    return (
        <div className='code-container'>
            <h2>Código</h2>
            <div style={{ padding: '15px 15px 15px 15px', backgroundColor: '#282a3a' }}>
                {listadoAgrupado.map((linea, index) => (
                    <div key={index} style={{}}>
                        <span style={{ marginRight: '10px', color: '#506882' }}>{index + 1}</span>
                        {linea.map((palabra, subIndex) => (
                            <span key={subIndex}
                                style={{
                                    borderBottom: palabra.esValido ? 'none' : '2px dashed red',
                                    color: palabra.color,
                                    marginRight: '5px'
                                }}>
                                {palabra.palabra}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrettyCode;  