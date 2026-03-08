import { Category } from "./category_model";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public img: string,
    public category: Category,
    public discount: number,
  ) {}

  PriceWithDiscountApplied(): number {
    return this.price - this.price * this.discount;
  }
}
