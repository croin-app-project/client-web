import { configureStore } from '@reduxjs/toolkit';
import authReducer, { initialAuth } from '@/pages/authenticate/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
store.dispatch(initialAuth());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;