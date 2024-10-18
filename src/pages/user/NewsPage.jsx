import React from 'react'
import Subbanner from '../../components/common/Subbanner/Subbanner'
import MainTitle from '../../components/common/MainTitle/MainTitle'
import MainNews from '../../components/user/news-page/MainNews'

const NewsPage = () => {
  return (
    <>
        <Subbanner/>
        <MainTitle pageSubName="News" pageName="News Page" />

        <MainNews/>
    </>
  )
}

export default NewsPage