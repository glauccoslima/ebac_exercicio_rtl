// Importa o componente Post para ser utilizado neste arquivo
import Post from "./components/Post";

// Importa os estilos definidos no arquivo App.module.css
import styles from './App.module.css';

// Define o componente App como uma função
function App() {
  return (
    // Usa a classe CSS "app" do arquivo App.module.css para estilizar o div
    <div className={styles.app}>
      {/*
        Renderiza o componente Post passando a URL da imagem do Batmóvel
        e o texto que descreve a imagem
      */}
      <Post imageUrl="https://raw.githubusercontent.com/glauccoslima/servidor_estaticos/main/Batm%C3%B3vel.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

// Exporta o componente App para ser usado em outros lugares do projeto
export default App;
