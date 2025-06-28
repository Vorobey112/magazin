import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem('userState');
    return storedData ? JSON.parse(storedData) : {
      uid: null,
      email: null,
      name: null,
      role: null,
    };
  } catch (e) {
    console.error("Failed to parse user state from localStorage", e);
    return {
      uid: null,
      email: null,
      name: null,
      role: null,
    };
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('userState', JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save user state to localStorage", e);
  }
};

const clearLocalStorage = () => {
  try {
    localStorage.removeItem('userState');
  } catch (e) {
    console.error("Failed to clear user state from localStorage", e);
  }
};

const initialState = loadFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
      saveToLocalStorage(state);
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.role = null;
      clearLocalStorage();
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;