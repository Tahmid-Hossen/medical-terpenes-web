import {v4 as uuidv4} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";
import {toast} from 'react-hot-toast'; // Import react-hot-toast

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      // Convert productRole to lowercase for consistent checking
      const newProductRole = product.productRole.toLowerCase();

      // Check if the cart already contains a product with a different role
      const conflictingRoleExists = state.cartItems.some(
        item => item.productRole.toLowerCase() !== newProductRole
      );

      if (conflictingRoleExists) {
        toast.error(`Cannot add ${product.productRole} product as there are items from a different role in the cart.`, {
          position: 'bottom-left',
        });
        return;
      }

      // Find if a cart item exists with the same id, formula, and volume
      const cartItem = state.cartItems.find(item =>
        item.id === product.id &&
        item.formula === product.formula &&
        item.volume === product.volume
      );

      // If the product with the same formula and volume is not in the cart, add it as a new item
      if (!cartItem) {
        state.cartItems.push({
          ...product,
          quantity: product.quantity || 1,
          cartItemId: uuidv4(),
        });
        toast.success('Added to cart', {
          position: 'bottom-left',
        });
      } else {
        // If the product with the same formula and volume exists, update the quantity
        state.cartItems = state.cartItems.map(item => {
          if (item.cartItemId === cartItem.cartItemId) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });
        toast('Quantity updated', {
          position: 'bottom-left',
          icon: '🔄',
        });
      }
    },
    applyDiscountToCart(state, action) {
      const discountValue = action.payload;
      state.cartItems = state.cartItems.map(item => ({
        ...item,
        discountedPrice: discountValue
      }));
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
      toast.error('Removed from cart', {position: 'bottom-left'});
    },

    decreaseQuantity(state, action) {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
        toast.error('Removed from cart', {position: 'bottom-left'});
      } else {
        state.cartItems = state.cartItems.map(item =>
          item.cartItemId === product.cartItemId
            ? {...item, quantity: item.quantity - 1}
            : item
        );
        toast.success('Item decremented in cart', {position: 'bottom-left'});
      }
    },

    increaseQuantity(state, action) {
      const product = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.cartItemId === product.cartItemId
          ? {...item, quantity: item.quantity + 1}
          : item
      );
      toast.success('Item incremented in cart', {position: 'bottom-left'});
    },

    deleteAllFromCart(state) {
      state.cartItems = [];
      toast.error('All items removed from cart', {position: 'bottom-left'});
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.cartItems,
        };
      })
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  deleteAllFromCart,
  applyDiscountToCart
} = cartSlice.actions;
export default cartSlice.reducer;