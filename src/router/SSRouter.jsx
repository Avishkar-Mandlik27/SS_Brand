import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import ProductDetails from '../components/ProductDetails';
import ProductGrid from '../components/ProductGrid';
import AboutUs from '../components/AboutUs';

export let routes = createBrowserRouter([{

    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        }
        , {
            path: "/home",
            element: <Home />
        },
        {
            path: "/products",
            element: <ProductGrid />
        },
        {
            path: "/about",
            element:  <AboutUs />
        },
        {
            path: "/contact",
            element: <ContactUs />
        },
        {
            path: "/product/:id",
            element: <ProductDetails />
        }
    ]

}]);

const SSRouter = () => {

    return (
        <div>

        </div>
    )
}

export default SSRouter
