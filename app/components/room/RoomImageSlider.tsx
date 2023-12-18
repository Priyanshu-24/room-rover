import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { IImage } from "@/backend/models/room";

interface Props {
  images: IImage[];
}

const RoomImageSlider = ({ images }: Props) => {
  return (
    <Carousel autoPlay>
      <div>
        <img src={images[0]?.url} />
      </div>
      <div>
        <img src={images[1]?.url} />
      </div>
    </Carousel>
  );
};

export default RoomImageSlider;
