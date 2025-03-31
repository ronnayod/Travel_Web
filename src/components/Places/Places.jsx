import React from 'react'
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import PlacesCard from "./PlacesCard"

const PlacesData = [
  {
    img: Img1,
    title: "Boat Tour",
    location: "USA",
    description: "Enjoy a relaxing boat tour along the scenic rivers of the USA.",
    price: 100,
    type: "Relaxation",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description: "An ivory-white marble mausoleum on the river Yamuna in Agra.",
    price: 6700,
    type: "Cultural",
  },
  {
    img: Img3,
    title: "Underwater Adventure",
    location: "USA",
    description: "Explore the underwater world with a guided diving tour.",
    price: 6200,
    type: "Adventure",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description: "The Taj Mahar is an ivory-white marble mausoleum on the south bank of the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description: "The Taj Mahar is an ivory-white marble mausoleum on the south bank of the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  }
];

const Places = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            PlacesData.map((item,
              index) => (
                <PlacesCard key={index} {...item} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Places
