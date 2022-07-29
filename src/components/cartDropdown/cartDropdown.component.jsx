import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cartItem/cartItem.component";
import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} CartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
