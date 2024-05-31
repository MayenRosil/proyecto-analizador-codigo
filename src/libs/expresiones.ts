
import { Palabra } from '../interfaces/palabra';
import { ISintaxis } from '../interfaces/sintaxis';

//ERRORES SINTACTICOS
export const erroreSintacticos: Palabra[] = [
  {
    numeroLinea: 1,
    palabra: "]",
    esValido: false,
    tipo: "Error Sintáctico",
    color: "#FFF",
    error: "Se esperaba un ] pero se encontró un ).",
    lineas: [10]
  },
  {
    numeroLinea: 1,
    palabra: "]",
    esValido: false,
    tipo: "Error Sintáctico",
    color: "#FFF",
    error: "La variable 'numero53' no está declarada.",
    lineas: [7, 19]
  },
  {
    numeroLinea: 1,
    palabra: "]",
    esValido: false,
    tipo: "Error Sintáctico",
    color: "#FFF",
    error: "Se esperaba un ';'.",
    lineas: [4, 8]
  }
]

//DEFINE LAS PALABRAS RESERVADAS DEL LENGUAJE
export const expresionesRegulares: ISintaxis[] = [
  //CODE502
  //BLOQUE(1) DECLARACION Y DEFINICION.
  {
    regex: /^([N][o][t][A][b][s][t][r][a][c][t][a])$/,
    palabra: 'NotAbstracta',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([C][l][a][s][e][M][u][s][i][c][a][l])$/,
    palabra: 'ClaseMusical',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([E][x][t][e][n][d][e][r][T][e][m][p][o])$/,
    palabra: 'ExtenderTempo',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([F][i][n][a][l][C][a][n][c][i][o][n])$/,
    palabra: 'FinalCancion',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([I][m][p][l][e][m][e][n][t][a][r][R][i][t][m][o])$/,
    palabra: 'ImplementarRitmo',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([I][n][t][e][r][f][a][z])$/,
    palabra: 'Interfaz',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([R][i][t][m][o][N][a][t][i][v][o])$/,
    palabra: 'RitmoNativo',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([E][s][t][r][i][c][t][o][F][P])$/,
    palabra: 'EstrictoFP',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  {
    regex: /^([S][i][n][c][r][o][n][i][z][a][r][T][e][m][p][o])$/,
    palabra: 'SincronizarTempo',
    tipo: 'Declaración/Definición',
    color: '#c586c0'
  },
  //BLOQUE(2) CONTROL DE FLUJO
  {
    regex: /^([P][a][u][s][a][M][u][s][i][c][a])$/,
    palabra: 'PausaMusica',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][C][a][s][o])$/,
    palabra: 'NotaCaso',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([C][o][n][t][i][n][u][a][r][M][u][s][i][c][a])$/,
    palabra: 'ContinuarMusica',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][D][e][f][e][c][t][o])$/,
    palabra: 'NotaDefecto',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][D][o])$/,
    palabra: 'NotaDo',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][A][l][t][e][r][n][a][t][i][v][a])$/,
    palabra: 'NotaAlternativa',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][P][o][r])$/,
    palabra: 'NotaPor',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([N][o][t][a][S][i])$/,
    palabra: 'NotaSi',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([R][e][g][r][e][s][a][r][N][o][t][a])$/,
    palabra: 'RegresarNota',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([C][a][m][b][i][o][R][i][t][m][o])$/,
    palabra: 'CambioRitmo',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  {
    regex: /^([M][i][e][n][t][r][a][s][S][u][e][n][a])$/,
    palabra: 'MientrasSuena',
    tipo: 'Control de Flujo',
    color: '#ac4c1f'
  },
  //BLOQUE(3) MODIFICADORES DE ACCESO
  {
    regex: /^([C][a][n][c][i][o][n][P][r][i][v][a][d][a])$/,
    palabra: 'CancionPrivada',
    tipo: 'Modificadores de Acceso',
    color: '#1f88da'
  },
  {
    regex: /^([C][a][n][c][i][o][n][P][r][o][t][e][g][i][d][a])$/,
    palabra: 'CancionProtegida',
    tipo: 'Modificadores de Acceso',
    color: '#1f88da'
  },
  {
    regex: /^([C][a][n][c][i][o][n][P][u][b][l][i][c][a])$/,
    palabra: 'CancionPublica',
    tipo: 'Modificadores de Acceso',
    color: '#1f88da'
  },
  //BLOQUE(4) CLASES Y METODOS
  {
    regex: /^([E][s][t][e][R][i][t][m][o])$/,
    palabra: 'EsteRitmo',
    tipo: 'Clase y Métodos',
    color: '#1f88da'
  },
  {
    regex: /^([S][u][p][e][r][p][o][s][i][c][i][o][n][R][i][t][m][o])$/,
    palabra: 'SuperposicionRitmo',
    tipo: 'Clase y Métodos',
    color: '#1f88da'
  },
  //BLOQUE(5) MANEJO DE EXCEPCIONES
  {
    regex: /^([C][a][p][t][u][r][a][S][o][n][i][d][o])$/,
    palabra: 'CapturaSonido',
    tipo: 'Manejo de Excepciones',
    color: '#4ebc7d'
  },
  {
    regex: /^([S][o][n][i][d][o][F][i][n][a][l])$/,
    palabra: 'SonidoFinal',
    tipo: 'Manejo de Excepciones',
    color: '#4ebc7d'
  },
  {
    regex: /^([L][a][n][z][a][r][S][o][n][i][d][o])$/,
    palabra: 'LanzarSonido',
    tipo: 'Manejo de Excepciones',
    color: '#4ebc7d'
  },
  {
    regex: /^([L][a][n][z][a][m][i][e][n][t][o][s][S][o][n][i][d][o][s])$/,
    palabra: 'LanzamientosSonidos',
    tipo: 'Manejo de Excepciones',
    color: '#4ebc7d'
  },
  {
    regex: /^([I][n][t][e][n][t][a][r][S][o][n][i][d][o])$/,
    palabra: 'IntentarSonido',
    tipo: 'Manejo de Excepciones',
    color: '#4ebc7d'
  },
  //BLOQUE(6) TIPOS DE DATOS PRIMITIVOS
  {
    regex: /^([N][o][t][a][B][o][o][l][e][a][n][a])$/,
    palabra: 'NotaBooleana',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][B])$/,
    palabra: 'NotaB',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][C])$/,
    palabra: 'NotaC',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][D][o][b][l][e])$/,
    palabra: 'NotaDoble',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][F][a])$/,
    palabra: 'NotaFa',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][N][u][m])$/,
    palabra: 'NotaNum',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([T][e][m][p][o][L][a])$/,
    palabra: 'TempoLa',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][C][o][r][t][a])$/,
    palabra: 'NotaCorta',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  {
    regex: /^([N][o][t][a][V][a][c][i][a])$/,
    palabra: 'NotaVacia',
    tipo: 'Datos Primitivos',
    color: '#dccd79'
  },
  //BLOQUE(7) CONSTANTES
  {
    regex: /^([L][e][t][r][a])$/,
    palabra: 'Letra',
    tipo: 'Constantes',
    color: '#dccb77'
  },
  //BLOQUE(8) CONTROL DE FLUJO EN INTERADORES
  {
    regex: /^([A][f][i][r][m][a][r][T][e][m][a])$/,
    palabra: 'AfirmarTema',
    tipo: 'Control de Flujo en Iteradores',
    color: '#dccb77'
  },
  //BLOQUE(9) CONTROL DE FLUJO EN BUCLES
  {
    regex: /^([I][r][T][e][m][a])$/,
    palabra: 'IrTema',
    tipo: 'Control de Flujo en Bucles',
    color: '#dccb77'
  },
  //BLOQUE(10) CONTROL DE FLUJO EN CONDICIONALES
  {
    regex: /^([E][n][u][m][e][r][a][r][N][o][t][a])$/,
    palabra: 'EnumerarNota',
    tipo: 'Control de Flujo en Condicionales',
    color: '#dccb77'
  },
  //BLOQUE(11) MANEJO DE MEMORIA
  {
    regex: /^([N][u][e][v][o][T][e][m][a])$/,
    palabra: 'NuevoTema',
    tipo: 'Manejo de Memoria',
    color: '#dccb77'
  },
  //BLOQUE(12) MANEJO DE PAQUETES
  {
    regex: /^([I][m][p][o][r][t][a][r][R][i][t][m][o])$/,
    palabra: 'ImportarRitmo',
    tipo: 'Manejo de Paquetes',
    color: '#dccb77'
  },
  {
    regex: /^([P][a][q][u][e][t][e][R][i][t][m][o])$/,
    palabra: 'PaqueteRitmo',
    tipo: 'Manejo de Paquetes',
    color: '#dccb77'
  },
  //BLOQUE(13) OPERADORES
  {
    regex: /^([-])$/,
    palabra: '-',
    tipo: 'Operadores',
    color: '#1bf4ff'
  },
  {
    regex: /^([*])$/,
    palabra: '*',
    tipo: 'Operadores',
    color: '#1bf4ff'
  },
  {
    regex: /^([/])$/,
    palabra: '/',
    tipo: 'Operadores',
    color: '#1bf4ff'
  },
  {
    regex: /^([=])$/,
    palabra: '=',
    tipo: 'Operadores',
    color: '#1bf4ff'
  },
  //BLOQUE(14) OTRAS PALABRAS RESERVADAS
  {
    regex: /^([F][a][l][s][o])$/,
    palabra: 'Falso',
    tipo: 'Otras Palabras Reservadas',
    color: '#1bf4ff'
  },
  {
    regex: /^([N][u][l][o])$/,
    palabra: 'Nulo',
    tipo: 'Otras Palabras Reservadas',
    color: '#1bf4ff'
  },
  {
    regex: /^([V][e][r][d][a][d][e][r][o])$/,
    palabra: 'Verdadero',
    tipo: 'Otras Palabras Reservadas',
    color: '#1bf4ff'
  },
  {
    regex: /^([I][m][p][r][i][m][i][r][L][e][t][r][a])$/,
    palabra: 'ImprimirLetra',
    tipo: 'Otras Palabras Reservadas',
    color: '#1bf4ff'
  },
  //BLOQUE(15) CARACTER
  {
    regex: /^(")$/,
    palabra: '"',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(,)$/,
    palabra: ',',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(!)$/,
    palabra: '!',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(@)$/,
    palabra: '@',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\$)$/,
    palabra: '$',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(#)$/,
    palabra: '#',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(%)$/,
    palabra: '%',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\^)$/,
    palabra: '^',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(&)$/,
    palabra: '&',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\*)$/,
    palabra: '*',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\()$/,
    palabra: '(',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\))$/,
    palabra: ')',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\/)$/,
    palabra: '/',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\\\\)$/,
    palabra: '\\\\',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(-)$/,
    palabra: '-',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\+)$/,
    palabra: '+',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(=)$/,
    palabra: '=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\/)$/,
    palabra: '\/',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\[)$/,
    palabra: '[',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\])$/,
    palabra: ']',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\{)$/,
    palabra: '{',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\})$/,
    palabra: '}',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\|)$/,
    palabra: '|',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(:)$/,
    palabra: ':',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(;)$/,
    palabra: ';',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(')$/,
    palabra: "'",
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(<)$/,
    palabra: '<',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(>)$/,
    palabra: '>',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(,)$/,
    palabra: ',',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\.)$/,
    palabra: '.',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\+=)$/,
    palabra: '+=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\+\+)$/,
    palabra: '++',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(<=)$/,
    palabra: '<=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(>=)$/,
    palabra: '>=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(!=)$/,
    palabra: '!=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(&&)$/,
    palabra: '&&',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(\*=)$/,
    palabra: '*=',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
  {
    regex: /^(==)$/,
    palabra: '==',
    tipo: 'Caracter',
    color: '#2ba3ff'
  },
]; 