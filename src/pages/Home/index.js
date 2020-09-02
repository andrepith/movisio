import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Search from 'components/Search'
import Card from 'components/Card'
import { getMovieListByTitle } from "store/actions";

const Dashboard = ({ history }) => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('Avengers')
  const disptach = useDispatch()
  const { movieList } = useSelector(state => state)
  const fetchApi = async () => {
    disptach(getMovieListByTitle({ search, page }))
  }

  const onSearchKeyword = (data) => {
    setSearch(data)
  }

  useEffect(() => {
    fetchApi() 
  }, [page, search])

  return (
    <div>
      <Search onSearchKeyword={onSearchKeyword} />
      {(movieList.Search || []).map((item, index) => (
        <Card key={index} {...item} history={history}  />
      ))}
    </div>
  )
}

export default Dashboard;