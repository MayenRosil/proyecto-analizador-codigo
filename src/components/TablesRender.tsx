import React, { useState, useEffect } from 'react';
import TokenTable from './TokenTable';
import ErrorTable from './ErrorTable';
import { Palabra } from '../interfaces/palabra';


interface TablesRenderProps {
    listadoPalabras: Palabra[]
}

const TablesRender: React.FC <TablesRenderProps> = ({listadoPalabras}) => {
    return (
        <div>
            <TokenTable listadoPalabras={listadoPalabras} />
            <ErrorTable listadoPalabras={listadoPalabras} />
        </div>
    )
}

export default TablesRender;