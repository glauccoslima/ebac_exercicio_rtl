// Importações necessárias de bibliotecas e componentes
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importa o arquivo de estilos global
import './main.css';

// Cria uma raiz React para renderizar a aplicação dentro do elemento com ID 'root'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderiza a aplicação em modo estrito para destacar potenciais problemas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de extremidade de análise.
// Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
