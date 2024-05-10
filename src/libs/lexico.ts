import { expresionesRegulares } from "./expresiones";

import {Palabra} from '../interfaces/palabra'
import { ISintaxis } from "../interfaces/sintaxis";

export const validadorLexico = (codigoPlano: string) : Palabra[] => {
    const palabras = dividirTextoEnPalabras(codigoPlano);

    return palabras;
}

//Recibe el codigo como texto plano y lo convierte en un array de objetos por cada palabra encontrada
const dividirTextoEnPalabras = (texto: string): Palabra[] => {

    //Divide el texto por saltos de línea
    const lineas = texto.split('\n');

    //Itera sobre cada línea para dividirla en palabras
    const palabrasValidadas: Palabra[] = [];
    for (let numeroLinea = 1; numeroLinea <= lineas.length; numeroLinea++) {

        //Accede a cada linea, separa las palabras por espacios en blanco
        const palabrasEnLinea = lineas[numeroLinea - 1].split(/\s+/).filter(palabra => palabra.trim() !== '');

        //Por cada palabra encontrada en una linea, valida si pertenece al alguna RegEx, si no, no es valida
        palabrasEnLinea.forEach(palabra => {
            let esValido = false;
            let tipoPalabra = '';
            let colorPalabra = '';
            let tipoError = "";
            for (const regex of expresionesRegulares) {
              if (regex.regex.test(palabra)) {
                esValido = true;
                tipoPalabra = regex.tipo;
                colorPalabra = regex.color;
                break;
              }
            }

            //Si una palabra no es valida, se comprueba a que tipo de error lexico pertenece
            if(!esValido) tipoError = validarTipoErrorLexico(palabra);
            if(tipoError === "NO"){
                if(/^[0-9]+$/.test(palabra)){
                    esValido = true;
                    tipoPalabra = "Numero";
                    colorPalabra = "#fff";
                }else{
                    esValido = true;
                    tipoPalabra = "Identificador";
                    colorPalabra = "#fff";
                }
            }

            //Crea el objeto y lo agrega al array final de palabras
            palabrasValidadas.push({
                numeroLinea,
                palabra,
                esValido,
                tipo: esValido ? tipoPalabra : 'Léxico',
                color: esValido ? colorPalabra : '#fff',
                error: tipoError
            });
        });
    }

    return palabrasValidadas;
};


//Valida los distintos tipos de errores lexicos
const validarTipoErrorLexico = (palabraEscrita: string) => {

    let validacion = "NO"
    const simbolosAceptados = /^[A-Za-z0-9",!@$#%^&*()/\\\-+=\[\]{}|:;'<>,.]*$/;
    const regexNumeros = /^[0-9]+$/;
    const regexIdentificador = /^[a-zA-Z][_a-zA-Z0-9]*$/;

    //Validar si solo son numeros
    if(regexNumeros.test(palabraEscrita)){
        return "NO";
    }
    
    //Validar un simbolo que no pertenece al lenguaje
    //Recorre la palabra, comprueba cada caracter con los simbolos aceptados
    //Si al menos 1 caracter no corresponde, salta este error
    if(palabraEscrita.split('').some(char => !simbolosAceptados.test(char))){
        return "Caracter no valido";
    }

    //Validar numero mal formado
    //Valida si la expresion empieza con numero
    //Valida si al menos la mitad de los caracteres son numeros
    //Si contiene al menos 1 caracter que no sea numero, salta este error
    if(regexNumeros.test(palabraEscrita[0])){
        let contadorNumeros = 0;
        for (let i = 0; i < palabraEscrita.length; i++) {
            if (!isNaN(parseInt(palabraEscrita[i]))) {
                contadorNumeros++;
            }
        }
        const mitadLongitud = palabraEscrita.length / 2;

        if(contadorNumeros >= mitadLongitud){
            if(palabraEscrita.split('').some(char => !regexNumeros.test(char))){
                return "Numero mal formado";
            }
        }
    }

    //Validar identificado mal escrito
    //Valida si cumple la regla de los identificadores
    //Si no, salta este error
    if(!regexIdentificador.test(palabraEscrita)){
        return "Identificador invalido";
    }

    //Validar palabra reservada mal escrita
    //Valida si al menos el 75% de caracteres coinciden con los de alguna palabra reservada
    //Si es asi, sin importar el orden, salta este error
    expresionesRegulares.map((exp, index) => {
        // Eliminar caracteres duplicados de cada palabra
        const palabra1Unica = eliminarDuplicados(palabraEscrita);
        const palabra2Unica = eliminarDuplicados(exp.palabra);

        // Contador para almacenar el número de caracteres en común
        let contadorCoincidencias = 0;

        // Iterar sobre los caracteres únicos de la primera palabra
        for (const caracter of palabra1Unica) {
            // Verificar si el caracter está presente en la segunda palabra
            if (palabra2Unica.includes(caracter)) {
                contadorCoincidencias++; // Incrementar el contador si coincide
            }
        }
        // Calcular el porcentaje de coincidencia
        const porcentajeCoincidencia = (contadorCoincidencias / Math.max(palabra1Unica.length, palabra2Unica.length)) * 100;
        // Verificar si al menos el 75% de los caracteres coinciden
        if(porcentajeCoincidencia >= 75) validacion = "Palabra reservada mal escrita";
   
    }
    );
    return validacion;

}

const eliminarDuplicados = (cadena: string): string => {
    return cadena.split('').filter((caracter, indice, arr) => arr.indexOf(caracter) === indice).join('');
};