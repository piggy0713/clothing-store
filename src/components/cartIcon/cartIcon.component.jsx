import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleCartHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
