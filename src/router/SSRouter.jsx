import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import Blogs from '../components/Blogs';
import ProductDetails from '../components/ProductDetails';
import ProductGrid from '../components/ProductGrid';

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
            path: "/blogs",
            element: <Blogs/>
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
