import { Product } from "./product_model";

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  constructor(public listProduct: CartItem[] = []) {}

  addItem(product: Product, quantity: number = 1) {
    const exists = this.listProduct.some(
      (item) => item.product.id === product.id,
    );

    if (exists) {
      this.listProduct = this.listProduct.map((item) => {
        if (item.product.id === product.id) {
          return {
            product: item.product,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
    } else {
      this.listProduct.push({ product, quantity });
    }
  }

  getTotalItems(): number {
    return this.listProduct.reduce((total, item) => total + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.listProduct.reduce(
      (total, item) =>
        total + item.product.PriceWithDiscountApplied() * item.quantity,
      0,
    );
  }
}
