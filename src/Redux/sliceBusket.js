import { createSlice } from "@reduxjs/toolkit";


const loadBasket = () => {
  try {
    const data = localStorage.getItem('basket');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Ошибка при загрузке корзины:", e);
    return [];
  }
};


const saveBasket = (basket) => {
  try {
    localStorage.setItem('basket', JSON.stringify(basket));
  } catch (e) {
    console.error("Ошибка при сохранении корзины:", e);
  }
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: loadBasket(),
  reducers: {
    addToBasket: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        saveBasket(state);
      }
    },

    removeFromBasket: (state, action) => {
      const updated = state.filter(item => item.id !== action.payload);
      saveBasket(updated); 
      return updated;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;