
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage"
import SingleProduct from "./pages/SingleProduct"
import { ProductsProvider } from "./context/ProductsContext"

function App() {
  return (

    /* aggiungo il Provider */

    <ProductsProvider>

      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/product/:id" Component={SingleProduct} />
          </Route>
        </Routes>
      </BrowserRouter>

    </ProductsProvider>
  )
}

export default App
