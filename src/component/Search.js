import React, { useEffect } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { addMovie } from '../redux/slices/moviesReducers'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Movie from './Movie'


function Search() {
  const params = useParams()
  const dispatch = useDispatch()
  const {searchData} = params
  console.log({searchData})
  const  movies = useSelector(state=> state.movies)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=<<cb8bca77539fea3caad75ae7af7f7b7f>>&query=${searchData}`).then(res => {console.log(res.data)})
  }, [searchData])
  console.log(movies)
  return (
    <div className='container'>
      <Nav />
      <div className=''>
        <h4>Search Results for  '{searchData}'</h4>
         {(movies.includes(searchData) || movies === searchData) ?
            movies.map(movie => {return (<Movie movie={movie}/>)}):
            <h4>Result not found</h4>
          }
      </div>
    </div>
  )
}

export default Search