import { configureStore } from '@reduxjs/toolkit'
import moviesReducers from './slices/moviesReducers'


const store= configureStore({
    reducer: {
        movies: moviesReducers
    }
})

export default store