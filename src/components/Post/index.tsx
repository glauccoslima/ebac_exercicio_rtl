import styles from './Post.module.css';
import PostComments from '../PostComments';
import { ReactNode, useState } from 'react'; // Importa useState para gerenciar o estado do componente

// Define os tipos para as props do componente
type Props = {
    children: ReactNode; // Conteúdo textual do post
    imageUrl: string;   // URL da imagem do post
}

const Post = ({ children, imageUrl }: Props) => {
    // Estado para controlar se a imagem está ampliada ou não
    const [isZoomed, setIsZoomed] = useState(false);

    // Função para alternar o estado de zoom da imagem
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={styles.post}>
            {/* Imagem do post. Ao clicar, alterna o zoom */}
            <img
                onClick={toggleZoom}
                // Aplica a classe de zoom se 'isZoomed' for verdadeiro
                className={`${styles['post-image']} ${isZoomed ? styles.zoomed : ''}`}
                src={imageUrl}
                alt="Conteúdo visual do post"
            />
            {/* Conteúdo textual do post */}
            <p className={styles['post-text']}> {children} </p>

            {/* Comentários relacionados ao post */}
            <PostComments />
        </div>
    );
};

export default Post;
