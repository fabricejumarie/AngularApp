import { Order } from "./order";

export interface Customer {
    customerId: string;
    lastName: string;
    firstName: string;
    email: string;
    productIds: string[],
    orders: Order[];
}
