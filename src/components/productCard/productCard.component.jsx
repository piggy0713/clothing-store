import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Button
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
