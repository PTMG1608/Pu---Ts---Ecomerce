//esse arquivo é para criar a classe de produto, que vai ser usada para criar os produtos do sistema
//inclue seis variaveis, id, name, price, img, category e discount, que são do tipo number, string, number, string, Category e number respectivamente, e um construtor para inicializar essas variáveis
import { Category } from "./category_model";

// a classe de produto tem um método para calcular o preço do produto com o desconto aplicado, ele retorna o preço com o desconto aplicado
export class Product {
  constructor(
    public id: number, // variável para armazenar o id do produto, que é do tipo number
    public name: string, // variável para armazenar o nome do produto, que é do tipo string
    public price: number, // variável para armazenar o preço do produto, que é do tipo number
    public img: string, // variável para armazenar a imagem do produto, que é do tipo string
    public category: Category, // variável para armazenar a categoria do produto, que é do tipo Category
    public discount: number, // variável para armazenar o desconto do produto
  ) {}

  // esse método é para calcular o preço do produto com o desconto aplicado, ele retorna o preço com o desconto aplicado
  PriceWithDiscountApplied(): number {
    return this.price - this.price * this.discount;
  }
}
