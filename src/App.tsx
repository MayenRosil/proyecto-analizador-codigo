import React, { useState } from 'react';

import FileInput from './components/FileInput';
import CodeInput from './components/CodeInput';
import TablesRender from './components/TablesRender';
import PrettyCode from './components/PrettyCode';
import { validadorLexico } from './libs/lexico';
import { Palabra } from './interfaces/palabra';



const App: React.FC = () => {

  const [codeText, setCodeText] = useState<string>("");
  const [listadoPalabras, setListadoPalabras] = useState<Array<Palabra>>([]);
  const [listadoAgrupado, setListadoAgrupado] = useState<Array<Array<Palabra>>>([]);
  const [analizarLexico, setAnalizarLexico] = useState<boolean>(false);

  //Funcion que crea el listado de palabras agrupadas
  const analisisLexico = (codigoPlano: string) => {
    const listadoPrevio: Array<Palabra> = validadorLexico(codigoPlano);
    const listadoNuevo = agruparTablas(listadoPrevio)
    setListadoPalabras(listadoNuevo);

    agrupar(validadorLexico(codigoPlano));
  }

  //Funcion que agrupa el texto por lineas, creando un array principal
  //y un subarray por cada linea que tenga el archivo
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

  //Funcion que agrupa los datos para las tablas
  //obtiene las palabras que se repiten lineas distintas
  //y las agrupa para que cada una contenga en un array las lineas en las que aparece
  const agruparTablas = (listadoPalabras: Palabra[]): Palabra[] => {

    const nuevoArray: Palabra[] = [];
    const agrupado: { [key: string]: { numeroLinea: number[] } } = {};

    listadoPalabras.forEach(obj => {
      if (agrupado[obj.palabra]) {
        agrupado[obj.palabra].numeroLinea.push(obj.numeroLinea);
      } else {
        agrupado[obj.palabra] = { numeroLinea: [obj.numeroLinea] };
      }
    });

    for (const palabra in agrupado) {
      if (Object.prototype.hasOwnProperty.call(agrupado, palabra)) {
        const objOriginal = listadoPalabras.find(obj => obj.palabra === palabra);
        if (objOriginal) {
          const newObjeto: Palabra = { ...objOriginal, lineas: agrupado[palabra].numeroLinea };
          nuevoArray.push(newObjeto);
        }
      }
    }
    return nuevoArray;
  }

  //Render principal de los componentes
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
