import { createContext, useContext, useEffect, useState } from "react";

// creo il context per condividere i dati
const ProductsContext = createContext()

// creo il componente Provider
function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    // restituisco i dati tramite il Provider
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

// creo una hook per accedere al context
function useProductsContext() {
    return useContext(ProductsContext)
}

// esporto il provider e la hook
export { ProductsProvider, useProductsContext }