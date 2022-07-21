import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
