import React from 'react'

const BannerImg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroudPosition: "center",
    height: "400px",
  };
  return (
    <div className="h-[400px] w-full" style={bgImage}>
      
    </div>
  )
}

export default BannerImg