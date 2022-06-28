import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovies: (state,{payload}) => {
            return state = payload
        }
    }
})

export const {  addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;