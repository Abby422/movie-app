import { configureStore } from '@reduxjs/toolkit'
import moviesReducers from './slices/moviesReducers'
import movieReducer from './slices/movieReducer'


const store= configureStore({
    reducer: {
        movies: moviesReducers,
        movie: movieReducer
    }
})

export default store