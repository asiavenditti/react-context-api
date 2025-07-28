
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export default function SingleProduct() {

    const [product, setProduct] = useState({})


    const { id } = useParams()
    useEffect(() => {
        const url_id = `https://fakestoreapi.com/products/${id}`
        fetch(url_id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })

    }, [id])

    const navigate = useNavigate()

    function next() {
        const nextPost = Number(id) + 1
        navigate(`/product/${nextPost}`)
    }

    function pre() {
        const previousPost = Number(id) - 1
        navigate(`/product/${previousPost}`)
    }
    return (
        <div className="container my-5 d-flex justify-content-center">
            <button
                onClick={pre}
                className="btn btn-danger me-3 align-self-center"
                style={{ height: '40px' }}
                aria-label="Prodotto precedente">
                <i className="bi bi-arrow-left"></i>
            </button>


            <div className="card shadow-sm border-0" style={{ maxWidth: "650px" }}>
                <div className="text-center p-4" style={{ height: "400px" }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid h-100"
                        style={{ objectFit: "contain" }} />
                </div>

                <p className="mb-2 text-center text-uppercase text-muted">{product.category}</p>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" title={product.title}>
                        {product.title}
                    </h5>
                    <p className="card-text text-muted small mb-3">{product.description}</p>
                    <p className="mb-2 fw-bold">⭐ {product.rating?.rate}</p>
                    <p className="mt-auto fw-bold text-danger">€{Number(product.price).toFixed(2)}</p>
                </div>
            </div>
            <button
                onClick={next}
                className="btn btn-danger ms-3 align-self-center"
                style={{ height: '40px' }}
                aria-label="Prodotto successivo">
                <i className="bi bi-arrow-right"></i>
            </button>
        </div>


    )
}