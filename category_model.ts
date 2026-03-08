// esse arquivo é para criar a classe de categoria, que vai ser usada para criar as categorias dos produtos
// inclue duas variaveis, id e name, que são do tipo number e string respectivamente, e um construtor para inicializar essas variáveis
export class Category {
  constructor(
    public id: number, // variável para armazenar o id da categoria
    public name: string, // variável para armazenar o nome da categoria
  ) {}
}
