import React, { useState, useEffect } from 'react';
import { Palabra } from '../interfaces/palabra';
import '../css/TokenTable.css';
import { expresionesRegulares } from '../libs/expresiones';

interface TokenTableProps {
    listadoPalabras: Palabra[]
}

const TokenTable: React.FC <TokenTableProps> = ({listadoPalabras}) => {
    return (
        <div className='table-container'>
        <h2>Tabla de Tokens</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Palabra</th>
                        <th scope="col">No. Linea</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {listadoPalabras.filter(x => x.esValido).map((p, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i}</th>
                                <td>{p.palabra}</td>
                                <td>{p.lineas?.map((li, j) => {
                                    return (
                                        <span key={j}>{li}, </span>
                                    )
                                })}</td>
                                <td>{p.tipo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TokenTable;