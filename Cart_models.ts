import { Product } from "./product_model"; // Importando a classe Product do arquivo product_model.ts

// Definindo a interface CartItem para representar um item no carrinho
export interface CartItem {
  product: Product;
  quantity: number;
}

// Definindo a classe Cart para representar o carrinho de compras
export class Cart {
  constructor(public listProduct: CartItem[] = []) {}
  // Método para adicionar um produto ao carrinho
  addItem(product: Product, quantity: number = 1) {
    const exists = this.listProduct.some(
      (item) => item.product.id === product.id,
    );
    // Verificando se o produto já existe no carrinho
    if (exists) {
      this.listProduct = this.listProduct.map((item) => {
        // Iterando sobre os itens do carrinho
        if (item.product.id === product.id) {
          // Verificando se o item é o produto que estamos adicionando
          return {
            product: item.product, //retornando o produto existente
            quantity: item.quantity + quantity, // Somando a quantidade existente com a nova quantidade
          };
        }

        return item; //retornando o item sem alterações se não for o produto que estamos adicionando
      });
    } else {
      this.listProduct.push({ product, quantity }); // Adicionando um novo item ao carrinho
    }
  }

  // Método para calcular o total de itens no carrinho
  getTotalItems(): number {
    return this.listProduct.reduce((total, item) => total + item.quantity, 0);
  }

  // Método para calcular o preço total do carrinho, aplicando os descontos dos produtos
  getFinalPrice(): number {
    return this.listProduct.reduce(
      (total, item) =>
        total + item.product.PriceWithDiscountApplied() * item.quantity,
      0,
    );
  }
}
