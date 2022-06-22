import React, { useEffect } from 'react'
import Movie from './Movie'
import Nav from './Nav'
import axios from 'axios'
import { addMovie } from '../redux/slices/moviesReducers'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const NewreleasesUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=cb8bca77539fea3caad75ae7af7f7b7f&language=en-US'

function Newreleases() {
  const dispatch = useDispatch()
  const movie = useSelector(state=> state.movies)
  useEffect(() => {
    axios.get(NewreleasesUrl).then( res => dispatch(addMovie(res.data.results)))
  }, [])
  return (
    <>
    <div className='container'>
        <Nav/>
        <h4 style={{fontWeight: '200'}}>New Releases</h4>
        <div className='movie-container'>
        {movie? movie.map(movies => (<Movie  movies={movies}/>)) : "Loading.." }
        </div>
    </div>
    </>
  )
}

export default Newreleases