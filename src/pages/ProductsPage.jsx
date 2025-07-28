import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container my-5">
            <h1 className="my-5 text-center">I nostri prodotti</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 border-0">

                                <div className="text-center p-3 h-50">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="img-fluid h-100"
                                    />
                                </div>
                                <p className="mb-2 text-center text-uppercase text-muted">{product.category}</p>
                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title" title={product.title}>
                                        {product.title}
                                    </h6>
                                    <p className="card-text text-muted small mb-3">
                                        {product.description}
                                    </p>
                                    <p className="mb-2 fw-bold">
                                        ⭐ {product.rating.rate}
                                    </p>
                                    <p className="mt-auto fw-bold text-danger">
                                        €{Number(product.price).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}
