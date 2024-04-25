import React, { useState, useEffect } from 'react';
import { Palabra } from '../interfaces/palabra';
import '../css/PrettyCode.css'

interface PrettyCodeProps {
    listadoAgrupado: Palabra[][]
}


const PrettyCode: React.FC <PrettyCodeProps> = ({listadoAgrupado}) => {


    return (
        <div className='code-container'>
        <h2>Código estilizado</h2>
        <div>
        {listadoAgrupado.map((linea, index) => (
                <div key={index} style={{flexDirection: 'column'}}>
                    <span style={{marginRight: '10px'}}>{index+1}</span>
                    {linea.map((palabra, subIndex) => (
                            <span key={subIndex} 
                            style={{borderBottom: palabra.esValido ? 'none' : '2px dashed red',
                                color: palabra.esValido ? 'blue' : 'black',
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