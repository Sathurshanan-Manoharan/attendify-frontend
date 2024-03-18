import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material";
import image1 from "../assets/google.png";

const items = [
  {
    name: "Slide 1",
    description: "Slide 1 description",
    img: { image1 },
  },
  {
    name: "Slide 2",
    description: "Slide 2 description",
    img: { image1 },
  },
  {
    name: "Slide 3",
    description: "Slide 3 description",
    img: { image1 },
  },
];

function SlidingImages() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        backgroundImage: `url(${props.item.img.image1})`,
        backgroundSize: "cover",
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default SlidingImages;
