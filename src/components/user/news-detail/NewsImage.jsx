import React from 'react'

const NewsImage = ({detailData}) => {
    console.log(detailData)
  return (
    <img src={detailData?.blog_thumbnail} alt="" />
  )
}

export default NewsImage