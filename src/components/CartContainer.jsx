import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'> is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
