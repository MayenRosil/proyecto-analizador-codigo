export interface Palabra {
    numeroLinea: number;
    palabra: string;
    esValido: boolean;
    tipo: string;
    color: string;
    error?: string;
    lineas?: number[];
}