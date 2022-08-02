import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";
import StripeCheckoutButton from "../../components/stripeButton/stripeButton.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TestWarning,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <TestWarning>
        *Please use the following test credit card for payments* <br />
        4242 4242 4242 4242 - Exp: 02/25 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutContainer>
  );
};

export default Checkout;
