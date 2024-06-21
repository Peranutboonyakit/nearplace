import _ from "lodash";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CarouselProps {
  images: Array<string>;
}

const Carousel = (props: CarouselProps) => {
  const [indexCurrent, setIndexCurrent] = useState<number>(0);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-[48%] left-[10px] flex items-center justify-center w-[18px] h-[18px] bg-white text-secondary-2 rounded-full transition duration-300 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          indexCurrent !== 0 && setIndexCurrent(indexCurrent - 1);
        }}
      >
        <MdKeyboardArrowLeft size={20} />
      </div>
      <img
        src={props.images[indexCurrent]}
        className="h-[176px] w-full bg-center object-cover rounded-[10px]"
      />
      <div
        className="absolute top-[48%] right-[10px] flex items-center justify-center w-[18px] h-[18px] bg-white text-secondary-2 rounded-full transition duration-300 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          indexCurrent < _.size(props.images) - 1 &&
            setIndexCurrent(indexCurrent + 1);
        }}
      >
        <MdKeyboardArrowRight size={20} />
      </div>
    </div>
  );
};

export default Carousel;
