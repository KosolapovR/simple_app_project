import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from './features/products';
import {userSlice} from './features/user';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
