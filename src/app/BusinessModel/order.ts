import { Product } from "./product";

export interface Order {
    orderId: string;
    customerId: string;
    productId: string;
    product: Product;
}
