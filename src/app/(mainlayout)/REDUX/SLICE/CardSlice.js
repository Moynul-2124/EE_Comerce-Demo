




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
  items: loadState('card'),
};

// 🧩 Slice Definition
const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const payload = {
        ...action.payload,
        id: action.payload.id,
        name: action.payload.name || action.payload.title || 'Untitled',
        image: action.payload.image || action.payload.previewImage || '',
        price: action.payload.price || '—',
      };

      const exists = state.items.find(item => item.id === payload.id);
      if (!exists) {
        state.items.push(payload);
        saveState('card', state.items);
      }
    },

    removeFromCard: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveState('card', state.items);
    },

    clearCard: (state) => {
      state.items = [];
      saveState('card', []);
    },
  },
});

// 🧩 Export Actions & Reducer
export const { addToCard, removeFromCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
