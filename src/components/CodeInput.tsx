import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import '../css/CodeInput.css';

type CodeInputProps = {
    recibirCodigo: string;
    validadorLexico: (codigoPlano: string, esSintactico?: boolean) => void;
    setCodeText: (data: string) => void
    setPresionoSintactico: React.Dispatch<React.SetStateAction<boolean>>
}

const CodeInput: React.FC<CodeInputProps> = ({ recibirCodigo, validadorLexico, setCodeText, setPresionoSintactico }) => {

    const codigoRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        //Obtiene el editor de codigo y el apartado de numeros de linea
        const codigo = document.getElementById("codigo") as HTMLTextAreaElement;
        const lineNumbers = document.querySelector('.line-numbers') as HTMLDivElement;

        //Dibuja el numero de linea siguiente cada que se presiona la letra Enter y se agrega una linea nueva
        codigo.addEventListener("keyup", (event: KeyboardEvent) => {
            const numberOfLines = codigo.value.split("\n").length;
            lineNumbers.innerHTML = Array(numberOfLines)
                .fill('<span></span>')
                .join('')
        });

        //Controla el presionar la tecla TAB para tabulacion
        codigo.addEventListener("keydown", function (event) {
            if (event.key === "Tab") {
                event.preventDefault();  // Evita que el foco cambie al siguiente elemento
                const tabCharacter = "    "; // 4 espacios para simular un tabulador
                const start = this.selectionStart;
                const end = this.selectionEnd;
                this.value = this.value.substring(0, start) + tabCharacter + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + tabCharacter.length;
            }
        });

        if (recibirCodigo) {
            codigo.value = recibirCodigo;
            let dispararEvento = new Event("keyup")
            codigo.dispatchEvent(dispararEvento)
        }


    }, [recibirCodigo]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCodeText(event.target.value)
    };

    return (
        <div className="container h-50 code-input-container">
            <div className="row h-50 mb-5">

                <div className=" mb-1">
                    <div id="header-container">
                        <h2>Editor</h2>

                        <div>
                            <button type="button" className="btn btn-info button-action" id="btn" onClick={() => validadorLexico(recibirCodigo)} >Analizador Léxico</button>
                            <button type="button" className="btn btn-warning button-action" id="btn" onClick={() => {validadorLexico(recibirCodigo, true); setPresionoSintactico(true);}} >Analizador Sintáctico</button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="editor">
                                <div className="line-numbers">
                                    <span></span>
                                </div>
                                <textarea ref={codigoRef} id="codigo" onChange={(e) => handleChange(e)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div>
    )
};

export default CodeInput;