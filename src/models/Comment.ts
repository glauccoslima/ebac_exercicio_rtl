// Define uma classe para representar um comentário
class Comment {
    // Propriedade ID para identificar de forma única cada comentário
    id: number;

    // Propriedade que armazena o conteúdo do comentário
    comment: string;

    // Construtor da classe que inicializa um novo comentário com um ID e seu conteúdo
    constructor (id: number, comment: string) {
        this.id = id;
        this.comment = comment;
    }
}

// Exporta a classe Comment como padrão
export default Comment;
