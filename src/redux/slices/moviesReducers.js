import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie: (state, {payload}) =>{
            return state = payload
        },
        clearMovie: (state)=>{
            return state = []
        }
    }
})

export const { addMovie, clearMovie } = movieSlice.actions;
export default movieSlice.reducer;