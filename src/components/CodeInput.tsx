import React, { useState, useEffect, useRef } from 'react';
import '../css/CodeInput.css';

type CodeInputProps = {
    recibirCodigo: string;
}

const CodeInput: React.FC<CodeInputProps> = ({ recibirCodigo }) => {

    const codigoRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {

        const codigo = document.getElementById("codigo") as HTMLTextAreaElement;
        const lineNumbers = document.querySelector('.line-numbers') as HTMLDivElement;

        codigo.addEventListener("keyup", (event: KeyboardEvent) => {
            const numberOfLines = codigo.value.split("\n").length;
            lineNumbers.innerHTML = Array(numberOfLines)
                .fill('<span></span>')
                .join('')
        });

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


    return (
        <div className="container h-50 code-input-container">
            <div className="row h-50 mb-5">

                <div className=" mb-1">
                    <div id="header-container">
                        <h2>Editor</h2>

                        <div>
                            <button type="button" className="btn btn-info" id="btn">Boton 1</button>
                            <button type="button" className="btn btn-info" id="btn">Boton 2</button>
                            <button type="button" className="btn btn-info" id="btn">Boton 3</button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="editor">
                                <div className="line-numbers">
                                    <span></span>
                                </div>
                                <textarea ref={codigoRef} id="codigo"></textarea>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div>
    )
};

export default CodeInput;