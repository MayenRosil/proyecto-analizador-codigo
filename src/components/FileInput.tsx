import React, { useState } from 'react';
import '../css/FileInput.css'

// Definición de tipo para el estado del archivo
type FileState = {
  name: string;
  content: string;
};

type FileInputProps = {
  setCodeText: (data: string) => void
}

const FileInput: React.FC<FileInputProps> = ({setCodeText}) => {
  // Estado para almacenar la información del archivo
  const [fileState, setFileState] = useState<FileState | null>(null);

  // Función para manejar el cambio en la selección del archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          if(file.name.split('.')[1] == 'atom'){
            setFileState({
              name: file.name,
              content: reader.result as string,
            });
            setCodeText(reader.result as string);
          }else{
            setFileState({
              name: '',
              content: '',
            });
            setCodeText("  ");
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className='file-input-container'>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;
