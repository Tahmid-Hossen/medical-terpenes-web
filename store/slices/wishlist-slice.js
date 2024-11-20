import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";
import {toast} from 'react-hot-toast'; // Import react-hot-toast

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: []
  },
  reducers: {
    addToWishlist(state, action) {
      const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
      if (isInWishlist > -1) {
        toast('Product already in wishlist', {
          position: 'bottom-left',
          icon: 'ℹ️',
        });
      } else {
        state.wishlistItems.push(action.payload);
        toast.success('Added to wishlist', {
          position: 'bottom-left',
        });
      }
    },
    deleteFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      toast.error('Removed from wishlist', {
        position: 'bottom-left',
      });
    },
    deleteAllFromWishlist(state) {
      state.wishlistItems = [];
      toast.error('Cleared wishlist', {
        position: 'bottom-left',
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.wishlistItems,
      };
    });
  },
});

export const {addToWishlist, deleteFromWishlist, deleteAllFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
