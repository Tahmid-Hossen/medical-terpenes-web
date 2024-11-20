const { createSlice } = require('@reduxjs/toolkit');

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: JSON.parse(localStorage.getItem('authUser')) || {}, // Load user from localStorage
//         isLoggedIn: !!localStorage.getItem('authUser'), // Check if user data exists
//     },
//     reducers: {
//         setAuth(state, action) {
//             state.user = action.payload.user;
//             state.isLoggedIn = true;
//             localStorage.setItem('authUser', JSON.stringify(state.user)); // Persist user in localStorage
//         },
//         clearAuth(state) {
//             state.user = {};
//             state.isLoggedIn = false;
//             localStorage.removeItem('authUser'); // Clear user from localStorage
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(HYDRATE, (state, action) => {
//             return {
//                 ...state,
//                 ...action.payload.auth, // Assuming `auth` is the key in the payload
//             };
//         });
//     },
// });


// export const { setAuth, clearAuth } = authSlice.actions;
// export default authSlice.reducer;


const initialState = {
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('authUser')) || {} : {},
  isLoggedIn: typeof window !== 'undefined' ? !!localStorage.getItem('authUser') : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('authUser', JSON.stringify(action.payload.user)); // Store user data in localStorage
      }
    },
    clearAuth(state) {
      state.user = {};
      state.isLoggedIn = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authUser'); // Clear user data from localStorage
      }
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
