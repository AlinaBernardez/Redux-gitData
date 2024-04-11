import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: 'user',
    initialState:{
        usu: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.usu = action.payload;
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;