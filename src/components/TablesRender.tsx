import React, { useState, useEffect } from 'react';
import TokenTable from './TokenTable';
import ErrorTable from './ErrorTable';
import { Palabra } from '../interfaces/palabra';


interface TablesRenderProps {
    listadoPalabras: Palabra[];
    presionoSintactico: boolean
}

const TablesRender: React.FC <TablesRenderProps> = ({listadoPalabras,presionoSintactico}) => {
    return (
        <div>
            <TokenTable listadoPalabras={listadoPalabras} />
            <ErrorTable presionoSintactico={presionoSintactico} listadoPalabras={listadoPalabras} />
        </div>
    )
}

export default TablesRender;