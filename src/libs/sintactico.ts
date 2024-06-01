import {Palabra} from '../interfaces/palabra';
import {reglasSintacticas} from '../libs/expresiones'
  
  interface ErrorSintactico {
    numeroLinea: number;
    mensaje: string;
  }
  
  function esIdentificador(palabra: string): boolean {
    // Aquí puedes agregar lógica para validar identificadores según las reglas de tu lenguaje
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(palabra);
  }
  
  function esExpresion(palabra: string): boolean {
    // Aquí puedes agregar lógica para validar expresiones según las reglas de tu lenguaje
    return esIdentificador(palabra) || !isNaN(parseFloat(palabra)) || ['true', 'false', 'null'].includes(palabra);
  }
  
  function verificarRegla(actual: string, siguiente: string): boolean {
    const posiblesSiguientes = reglasSintacticas[actual];
    if (!posiblesSiguientes) return false;
  
    if (posiblesSiguientes.includes('IDENTIFICADOR') && esIdentificador(siguiente)) {
      return true;
    }
  
    if (posiblesSiguientes.includes('EXPRESION') && esExpresion(siguiente)) {
      return true;
    }
  
    return posiblesSiguientes.includes(siguiente);
  }
  
  function analizarSintacticamente(tokens: Palabra[]): ErrorSintactico[] {
    const errores: ErrorSintactico[] = [];
  
    for (let i = 0; i < tokens.length - 1; i++) {
      const tokenActual = tokens[i];
      const tokenSiguiente = tokens[i + 1];
  
      if (tokenActual.esValido) {
        const tipoActual = tokenActual.palabra;
        const tipoSiguiente = tokenSiguiente.palabra;
  
        if (!verificarRegla(tipoActual, tipoSiguiente)) {
          errores.push({
            numeroLinea: tokenActual.numeroLinea,
            mensaje: `Error sintáctico en la línea ${tokenActual.numeroLinea}: se esperaba uno de [${reglasSintacticas[tipoActual]?.join(', ') || 'ninguno'}], pero se encontró '${tipoSiguiente}'`
          });
        }
      }
    }
  
    return errores;
  }
  
  export function procesarCodigo(inputArray: (Palabra[] | null)[]): ErrorSintactico[] {
    const erroresSintacticos: ErrorSintactico[] = [];
  
    inputArray.forEach((subarray) => {
      if (subarray) {
        const errores = analizarSintacticamente(subarray);
        erroresSintacticos.push(...errores);
      }
    });
  
    return erroresSintacticos;
  }
  


  