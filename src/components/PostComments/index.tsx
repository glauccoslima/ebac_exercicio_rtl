// Importações dos hooks e estilos necessários
import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

// Importação do modelo de Comentário
import Comment from '../../models/Comment';

const PostComments = () => {
    // Estado para armazenar os comentários
    const [comments, setComments] = useState<Comment[]>([]);
    // Estado para armazenar o conteúdo temporário de um comentário
    const [tempComment, setTempComment] = useState('');

    // Função para lidar com a adição de um novo comentário
    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevenir recarregamento da página

        // Criar um novo comentário
        const newComment = new Comment(comments.length, tempComment);

        // Limpar o estado temporário do comentário
        setTempComment('');
        // Atualizar a lista de comentários
        setComments([...comments, newComment]);
    }

    return (
        <div>
            {/* Lista de comentários */}
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li data-testid="comment-element" className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
                            {/* Exibindo o conteúdo do comentário */}
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>

            {/* Formulário para adição de novos comentários */}
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea
                    data-testid="comment-textarea"
                    value={tempComment}
                    onChange={e => setTempComment(e.target.value)}
                    required
                    className={styles['post-comments-form-textarea']}
                />
                <button
                    data-testid="comment-button"
                    type="submit"
                    className={styles['post-comments-form-button']}
                >
                    {/* Botão para submeter o comentário */}
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default PostComments;
