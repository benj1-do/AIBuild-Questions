// this is the implementation using the slice
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        import_request: (state) => {
            state.loading = true;
            state.error = null;
        },
        import_success: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        import_failure: (state, action) => {
            state.error = action.payload;
            // console.log(action.payload);
            state.loading = false;
        },
    },
})

export const { import_request, import_success, import_failure } = categoriesSlice.actions;
export default categoriesSlice.reducer;