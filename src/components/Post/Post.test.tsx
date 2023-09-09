import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });

    it('Should zoom in and out when image is clicked', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        const image = screen.getByAltText('Conteúdo visual do post');

        // Clicando na imagem para ampliar
        fireEvent.click(image);

        // Verificando se a classe "zoomed" foi aplicada à imagem
        expect(image).toHaveClass('zoomed');

        // Clicando na imagem para normalizar
        fireEvent.click(image);

        // Verificando se a classe "zoomed" foi removida da imagem
        expect(image).not.toHaveClass('zoomed');
    });

    it('Should render comments section', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        // Verificando se a seção de comentários foi renderizada
        expect(screen.getByText('Comentar')).toBeInTheDocument(); // Supondo que 'Comentar' é um texto padrão na seção de comentários
    });
});
