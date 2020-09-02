import React from "react";
import { useSelector } from 'react-redux'
import Search from 'components/Search'
import Card from 'components/Card'

const Dashboard = () => {
  const { movieList } = useSelector(state => state)
  return (
    <div>
      <Search />
      {(movieList.Search || []).map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default Dashboard;