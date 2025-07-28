import { useProductsContext } from "../context/ProductsContext"
import ProductsList from "../components/ProductsList"


export default function ProductsPage() {

    const { products } = useProductsContext()

    return (
        <div className="container my-5">
            <h1 className="my-5 text-center">I nostri prodotti</h1>
            <ProductsList products={products} />
        </div>
    )
}
