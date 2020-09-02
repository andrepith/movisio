import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Search from 'components/Search'
import Card from 'components/Card'
import { getMovieListByTitle } from "store/actions";

const Dashboard = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const disptach = useDispatch()
  const { movieList } = useSelector(state => state)
  const fetchApi = async () => {
    await disptach(getMovieListByTitle({ search: 'Avengers', page }))
    setData(movieList.Search)
  }

  useEffect(() => {
    fetchApi()
  }, [page])

  return (
    <div>
      {/* <Search /> */}
      {(movieList.Search || []).map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default Dashboard;