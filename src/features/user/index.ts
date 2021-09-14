import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {signIn} from './userAPI';
import {CredentialsType} from '../../types/common';

// Define a type for the slice state
interface UserState {
  first_name?: string;
  last_name?: string;
  email?: string;
  token?: string;
  avatar?: string;
}

// Define the initial state using that type
const initialState: {entity: UserState} = {
  entity: {},
};

export const postSignIn = createAsyncThunk(
  'user/signIn',
  async (credentials: CredentialsType) => {
    const response = await signIn(credentials);
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: state => {
      state.entity = {};
    },
  },
  // Use the PayloadAction type to declare the contents of `action.payload`
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postSignIn.fulfilled, (state, action) => {
      // Add user to the state array
      state.entity = action.payload;
    });
  },
});

export const {signOut} = userSlice.actions;

export const selectUserToken = (state: RootState) => state.user.entity.token;
export const selectUser = (state: RootState) => state.user.entity;

export default userSlice.reducer;
