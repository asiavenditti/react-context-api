import { createContext, useContext, useEffect, useState } from "react";

// creo il context per condividere i dati
const ProductsContext = createContext()

// creo il componente Provider
function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])
    const [alert, setAlert] = useState({
        type: 'info',
        message: ''
    })

    useEffect(() => {

        const url = 'https://fakestoreapi.com/products'

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(err => {
                console.error(err)

                setAlert({
                    type: 'error',
                    message: 'Prodotto non trovato'
                })
            })
    }, [])

    // restituisco i dati tramite il Provider
    return (
        <ProductsContext.Provider value={{ products, alert, setAlert }}>
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