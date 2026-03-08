import { Product } from "./model/product_model"; // Importando a classe Product do arquivo product_model.ts
import { Category } from "./model/category_model"; // Importando a classe Category do arquivo category_model.ts
import { Cart } from "./model/Cart_models"; //  Importando a classe Cart do arquivo Cart_models.ts
import { User, UserRole } from "./model/user_model"; // Importando a classe User e o enum UserRole do arquivo user_model.ts

// Criando uma categoria
const category = new Category(1, "Instrument");

// Criando um produto e associando à categoria
const product = new Product(
  1,
  "Guitarra Elétrica",
  100,
  "Product image URL",
  category,
  0.2,
);
// Criando um carrinho e adicionando produtos
const cart = new Cart(); // Criando um carrinho
cart.addItem(product, 2); // Adicionando produtos
cart.addItem(product, 1); // Adicionando produtos
cart.addItem(product, 3); // Adicionando produtos

// Criando usuários
const admin = new User(1, "pedro", "pedrotonimelo@gmail.com", UserRole.ADMIN); // Exibindo os usuários criados, incluindo suas informações como id, username, email e role
const customer = new User(2, "joao", "joao@email.com", UserRole.CUSTOMER); // Exibindo os usuários criados, incluindo suas informações como id, username, email e role

console.log(admin); // Exibindo os usuários criados, incluindo suas informações como id, username, email e role
console.log(customer); // Exibindo os usuários criados, incluindo suas informações como id, username, email e role

console.log("produto nome: ", product.name); // Exibindo o nome do produto
console.log("categoria nome: ", category.name); // Exibindo o nome do produto e o nome da categoria associada ao produto
console.log("carrinho: ", cart.listProduct); // Exibindo o conteúdo do carrinho, que inclui os produtos e suas quantidades
console.log("preço com desconto: ", product.PriceWithDiscountApplied()); // Exibindo o preço do produto com o desconto aplicado
console.log(
  "Quantidade de itens no carrinho: ",
  cart.getTotalItems(),
  "unidades",
); // Exibindo a quantidade total de itens no carrinho

console.log("Preço total do carrinho:", cart.getFinalPrice(), "reais"); // Exibindo o preço total do carrinho, aplicando os descontos dos produtos
console.log(
  "categoria dentro do carrinho:",
  cart.listProduct[0].product.category, // Acessando a categoria do produto dentro do carrinho
);
