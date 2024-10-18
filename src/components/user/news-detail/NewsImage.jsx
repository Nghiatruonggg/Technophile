import React from 'react'

const NewsImage = ({detailData}) => {
    console.log(detailData)
  return (
    <img src={detailData?.post_thumbnail} alt="" />
  )
}

export default NewsImage