import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './ListNews.scss'

const News = () => {

  const {news, getNews} = useContext(GlobalContext);
console.log(news);
  useEffect(()=>{
    getNews()
  },[])

  return (
    <div id='newsDiv'>
    {news.map(notice => {
    return  <div key={notice.id} className="basic-card basic-card-dark">
      <div className="card-content">
          <span className="card-title">{notice.title}</span>
          <p className="card-text">{notice.abstract}</p>
      </div>
      </div>
    })}
    </div>
  )
}

export default News