// Importa as funções necessárias para testar componentes React
import { render, screen } from '@testing-library/react';
// Importa o componente App para teste
import App from './App';

// Inicia uma suíte de testes para o componente App
describe('Test <App />', () => {
    // Define um caso de teste individual
    it('Expect render correctly', () => {
        // Renderiza o componente App
        render(
            <App />
        );
        // Verifica se um elemento com o atributo 'data-testid' igual a 'comment-button' está presente no documento
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });
})
