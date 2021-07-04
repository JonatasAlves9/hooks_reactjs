import { createContext } from 'react';

interface Product{
    id: number,
    name: string,
    price: number
}

interface Cart{
    products: Product[],
    shipping_value?: number,
}

const CartContext = createContext<Cart>({
    products: [{
        "id": 1,
        "name": "Água Mineral",
        "price": 2.5
    }],
});

export default CartContext;