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
const cart = new Cart();
cart.addItem(product, 2);
cart.addItem(product, 1);
cart.addItem(product, 3);

// Criando usuários
const admin = new User(1, "pedro", "pedrotonimelo@gmail.com", UserRole.ADMIN);
const customer = new User(2, "joao", "joao@email.com", UserRole.CUSTOMER);

console.log(admin);
console.log(customer);

console.log("produto nome: ", product.name);
console.log("categoria nome: ", category.name);
console.log("carrinho: ", cart.listProduct);
console.log("preço com desconto: ", product.PriceWithDiscountApplied());
console.log(
  "Quantidade de itens no carrinho: ",
  cart.getTotalItems(),
  "unidades",
);

console.log("Preço total do carrinho:", cart.getFinalPrice(), "reais");
console.log(
  "categoria dentro do carrinho:",
  cart.listProduct[0].product.category,
);
