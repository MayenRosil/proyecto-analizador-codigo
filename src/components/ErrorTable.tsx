import React, { useState, useEffect } from 'react';
import { Palabra } from '../interfaces/palabra';
import '../css/ErrorTable.css'
import { erroreSintacticos } from '../libs/expresiones';

interface ErrorTableProps {
    listadoPalabras: Palabra[];
    presionoSintactico: boolean
}

const ErrorTable: React.FC<ErrorTableProps> = ({ listadoPalabras, presionoSintactico }) => {
    return (
        <div className='table-container'>
        <h2>Tabla de Errores</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Palabra</th>
                        <th scope="col">No. Linea</th>
                        <th scope="col">Tipo error</th>
                        <th scope="col">Error</th>
                    </tr>
                </thead>
                <tbody>
                    {listadoPalabras.filter(x => !x.esValido).map((p, i) => {
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
                                <td>{p.error}</td>
                            </tr>
                        )
                    })}
                    {presionoSintactico &&
                    erroreSintacticos.filter(x => !x.esValido).map((p, i) => {
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
                                <td>{p.error}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ErrorTable;