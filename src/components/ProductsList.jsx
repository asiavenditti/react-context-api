
import ProductsCard from "./ProductCard"

export default function ProductsList({ products }) {


    return (
        <div className="row">
            {products.map((product) => {
                return (
                    <div key={product.id} className="col-md-4 mb-4">
                        <ProductsCard product={product} />
                    </div>
                )
            })}
        </div>
    )
}