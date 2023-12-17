import React, { useState, useEffect } from 'react';
import { useApi } from './utils/useApi.hook';
import { ProductsClient } from './api/clients/productsClient';

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const { getProducts } = ProductsClient;
    const productList = useApi(getProducts);

    useEffect(() => {
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(itemCount);
    }, [cart]);

    const addToCart = (product) => {
        if (cart.some((item) => item.title === product.title)) {
            const updatedCart = cart.map((item) => {
                if (item.title === product.title) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
            return;
        }
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const updateQuantity = (title, amount) => {
        const updatedCart = cart.map((item) => {
            if (item.title === title) {
                return { ...item, quantity: Math.max(1, item.quantity + amount) };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const deleteFromCart = (title) => {
        setCart(cart.filter((item) => item.title !== title));
    };

    return (
        <ApiContext.Provider value={{ productList, cart, cartItemCount, addToCart, updateQuantity, deleteFromCart }}>
            {children}
        </ApiContext.Provider>
    );
};
