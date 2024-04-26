import React, { useState } from 'react';

import FileInput from './components/FileInput';
import CodeInput from './components/CodeInput';
import TablesRender from './components/TablesRender';
import PrettyCode from './components/PrettyCode';

import { validadorLexico } from './libs/lexico';
import { Palabra } from './interfaces/palabra';

// Definición de tipo para el estado del archivo
type FileState = {
  name: string;
  content: string;
};

const App: React.FC = () => {

  const [fileState, setFileState] = useState<FileState | null>(null);
  const [codeText, setCodeText] = useState<string>("");

  const [listadoPalabras, setListadoPalabras] = useState<Array<Palabra>>([]);

  const [listadoAgrupado, setListadoAgrupado] = useState<Array<Array<Palabra>>>([]);

  const [analizarLexico, setAnalizarLexico] = useState<boolean>(false);

  const analisisLexico = (codigoPlano: string) => {
    setListadoPalabras(validadorLexico(codigoPlano));

    agrupar(validadorLexico(codigoPlano));
  }

  const agrupar = (listadoPalabras: Palabra[]): Palabra[][] => {
    const nuevoArray: Palabra[][] = listadoPalabras.reduce((acumulador: Palabra[][], objeto) => {
      const indice = objeto.numeroLinea - 1; // Restamos 1 para evitar problemas con los índices
      acumulador[indice] = acumulador[indice] || []; // Creamos el subarray si no existe
      acumulador[indice].push(objeto);
      return acumulador;
    }, []);

    setListadoAgrupado(nuevoArray)
    setAnalizarLexico(true)
    return nuevoArray;
  }

  return (
    <div className='main-container container'>
      <h1>Analizador de Código</h1>
      {!analizarLexico ?
        <React.Fragment>
          <FileInput setCodeText={setCodeText} />
          <CodeInput recibirCodigo={codeText} validadorLexico={(codigoPlano: string) => analisisLexico(codigoPlano)} setCodeText={setCodeText} />
        </React.Fragment>
        :
        <React.Fragment>
          <button type="button" className="btn btn-danger button-action" onClick={() => setAnalizarLexico(false)}>Regresar</button>
          <PrettyCode listadoAgrupado={listadoAgrupado} />
          <TablesRender listadoPalabras={listadoPalabras} />
        </React.Fragment>
      }
    </div>
  );
};

export default App;
