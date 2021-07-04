import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";



const AppContext: React.FC = () => {
    const { products } = useContext(CartContext);

    useEffect(() => {
        console.log(products)
    }, [])

    return (
        <div>
            <h1>ID: {products[0].id}</h1>
            <h1>Nome do produto: {products[0].name}</h1>
            <h1>Preço do produto: {products[0].price}</h1>
        </div>
    );
}


export default AppContext;