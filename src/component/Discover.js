import React, { useEffect } from 'react'
import Movie from './Movie'
import Nav from './Nav'
import axios from 'axios'
import { addMovie } from '../redux/slices/moviesReducers'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=cb8bca77539fea3caad75ae7af7f7b7f&language=en-US&sort_by=popularity.desc&page=1'

function Discover() {
  const dispatch = useDispatch()
  const movie = useSelector(state=> state.movies)
  useEffect(() => {
    axios.get(discoverUrl).then( res => dispatch(addMovie(res.data.results)))
  }, [])
  return (
    <>
    <div className='container'>
        <Nav/>
        <h4 style={{fontWeight: '200'}}>Discover</h4>
        <div className='movie-container'>
        {movie? movie.map(movies => (<Movie  movies={movies}/>)) : "Loading.." }
        </div>
    </div>
    </>
  )
}

export default Discover