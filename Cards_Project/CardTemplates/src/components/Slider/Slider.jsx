import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function Slider() {
  const sliderImages = [
    {
      url: "https://images.pexels.com/photos/19070228/pexels-photo-19070228/free-photo-of-atlanta-state-fair-ride.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/19249684/pexels-photo-19249684/free-photo-of-a-woman-in-a-field-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/18874833/pexels-photo-18874833/free-photo-of-fairmont-le-chateau-frontenac-a-quebec-depuis-la-ville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={600}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}
