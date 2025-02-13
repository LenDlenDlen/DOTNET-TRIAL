import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Homepage from "../../features/home/Homepage";
import ProductDetails from "../../features/catalog/ProductDetails";
import About from "../../features/about/About";
import Contacts from "../../features/contact/Contacts";
import Catalog from "../../features/catalog/catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contacts /> },
    ],
  },
]);
