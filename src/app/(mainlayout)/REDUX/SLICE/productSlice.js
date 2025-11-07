


'use client';
import { createSlice } from '@reduxjs/toolkit';

// 🧠 LocalStorage Helpers
const loadState = (key) => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveState = (key, data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
};

// 🧩 Initial State
const initialState = {
  cart: loadState('cart'),
  wishlist: loadState('wishlist'),
  quickView: null,
  cartPreview: null,
  products: {
    sectionTitle: 'Featured Products',
    items: [], // You can populate this or fetch dynamically
  },
};

// 🛒 Redux Slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // 🔁 Rehydrate manually if needed
    rehydrateState: (state) => {
      state.cart = loadState('cart');
      state.wishlist = loadState('wishlist');
    },

    // 🛒 Cart Actions
    addToCart: (state, action) => {
      const payload = {
        ...action.payload,
        id: action.payload.id,
        name: action.payload.name || action.payload.title || 'Untitled',
        image: action.payload.image || action.payload.previewImage || '',
        price: action.payload.price || '—',
        quantity: action.payload.quantity || 1,
      };

      const existing = state.cart.find((item) => item.id === payload.id);
      if (existing) {
        existing.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
      saveState('cart', state.cart);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveState('cart', state.cart);
    },

    clearCart: (state) => {
      state.cart = [];
      saveState('cart', []);
    },

    // ❤️ Wishlist Actions
    addToWishlist: (state, action) => {
      const payload = {
        ...action.payload,
        id: action.payload.id,
        name: action.payload.name || action.payload.title || 'Untitled',
        image: action.payload.image || action.payload.previewImage || '',
        price: action.payload.price || '—',
      };

      const exists = state.wishlist.find((item) => item.id === payload.id);
      if (!exists) {
        state.wishlist.push(payload);
        saveState('wishlist', state.wishlist);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      saveState('wishlist', state.wishlist);
    },

    // 👁️ Quick View
    setQuickView: (state, action) => {
      state.quickView = action.payload;
    },
    clearQuickView: (state) => {
      state.quickView = null;
    },

    // 🛒 Cart Preview
    setCartPreview: (state, action) => {
      state.cartPreview = action.payload;
    },
    clearCartPreview: (state) => {
      state.cartPreview = null;
    },
  },
});

// 🧩 Export Actions & Reducer
export const {
  rehydrateState,
  addToCart,
  removeFromCart,
  clearCart,
  addToWishlist,
  removeFromWishlist,
  setQuickView,
  clearQuickView,
  setCartPreview,
  clearCartPreview,
} = productSlice.actions;

export default productSlice.reducer;
