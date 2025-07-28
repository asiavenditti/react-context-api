import { useProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom"


export default function ProductCard({ product }) {

    return (
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            <div className="card h-100 border-0">
                <div className="text-center p-3 h-50">
                    <img src={product.image} alt={product.title} className="img-fluid h-100" />
                </div>
                <p className="mb-2 text-center text-uppercase text-muted">
                    {product.category}
                </p>
                <div className="card-body d-flex flex-column">
                    <h6 className="card-title">
                        {product.title}
                    </h6>
                    <p className="card-text text-muted small mb-3">
                        {product.description}
                    </p>
                    <p className="fw-bold mb-2">
                        ⭐ {product?.rating?.rate}
                    </p>
                    <p className="mt-auto fw-bold text-danger">
                        €{Number(product.price).toFixed(2)}
                    </p>
                </div>
            </div>
        </Link>
    )

}