import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cartItem/cartItem.component";
import Button from "../button/button.component";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} CartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
