import React, { useState } from 'react';
import FileInput from './components/FileInput';
import CodeInput from './components/CodeInput';

// Definición de tipo para el estado del archivo
type FileState = {
  name: string;
  content: string;
};

const App: React.FC = () => {

  const [fileState, setFileState] = useState<FileState | null>(null);
  const [codeText, setCodeText] = useState<string>("");


  return (
    <div className='main-container container'>
      <h1>Analizador de Codigo</h1>
      <FileInput setCodeText={setCodeText} />
      <CodeInput recibirCodigo={codeText} />
    </div>
  );
};

export default App;
