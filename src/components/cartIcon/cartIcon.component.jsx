import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleCartHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCartHandler}>
      <ShoppingIcon />
      <ItemCount className="item-count">{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
