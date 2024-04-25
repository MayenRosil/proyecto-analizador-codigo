import { expresionesRegulares } from "./expresiones";

interface Palabra {
    numeroLinea: number;
    palabra: string;
    esValido: boolean;
}

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
            for (const regex of expresionesRegulares) {
              if (regex.test(palabra)) {
                esValido = true;
                break;
              }
            }

            //Crea el objeto y lo agrega al array final
            palabrasValidadas.push({
                numeroLinea,
                palabra,
                esValido
            });
        });
    }

    return palabrasValidadas;
};

