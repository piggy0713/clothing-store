import { CartItemContainer, ItemDetails } from "./cartItem.styles";

const CartItem = ({ CartItem }) => {
  const { imageUrl, price, name, quantity } = CartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
