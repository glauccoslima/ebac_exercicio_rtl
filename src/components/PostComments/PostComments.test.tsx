// Importa as funções necessárias para realizar os testes
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

// Conjunto de testes para o componente PostComment
describe('Teste para o componente PostComment', () => {

    // Teste para verificar se o componente é renderizado corretamente
    it('Deve renderizar o componente corretamente', () => {
        // Renderiza o componente
        render(<PostComment/>);
        // Verifica se o botão "Comentar" é mostrado após a renderização
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    // Teste para verificar se é possível adicionar dois comentários
    it('Deve adicionar dois comentários', () => {
        // Renderiza o componente
        render(<PostComment/>);

        // Adiciona o primeiro comentário
        // Muda o valor da textarea para "Comentário adicionado via testes"
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        });
        // Clica no botão para adicionar o comentário
        fireEvent.click(screen.getByTestId('comment-button'));

        // Adiciona o segundo comentário
        // Muda o valor da textarea para "Segundo comentário adicionado via testes"
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        // Clica no botão para adicionar o comentário
        fireEvent.click(screen.getByTestId('comment-button'));

        // Verifica se dois comentários foram adicionados
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
