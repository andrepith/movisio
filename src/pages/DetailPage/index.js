import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetail } from "store/actions";

const DetailPage = ({history, match: {params: {id}}}) => {
  const dispatch = useDispatch()
  const {movieDetail} = useSelector(state => state)
  useEffect(() => {
    dispatch(getMovieDetail({search: id}))
  }, [])
  if (!Object.keys(movieDetail).length) {
    if (movieDetail.Error) {
      return <div>Oops Something Went Wrong</div>  
    }
    return <div>Loading...</div>
  }
  return (
    <div>
      <button className='d-block mb-1' onClick={() => history.push('/')}>Go Back Home</button>
      <img src={movieDetail.Poster} />
      <div>Title: {movieDetail.Tittle}</div>
      <div>Year: {movieDetail.Year}</div>
      <div>Rated: {movieDetail.Rated}</div>
      <div>Rleased: {movieDetail.Released}</div>
      <div>Genre: {movieDetail.Genre}</div>
    </div>
  )
}

export default DetailPage