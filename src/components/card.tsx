import { FaRegCalendarAlt } from "react-icons/fa";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import { Place } from "../types/types";
import Carousel from "./carousel";

interface CardProps {
  place: Place;
}

const Card = (props: CardProps) => {
  const place = props.place;
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/${place.id}`);
  };

  return (
    <div
      id="card-container"
      className="h-[321px] sm:h-[225px] bg-white rounded-[10px] sm:p-4 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-lg transition duration-300"
      onClick={onClickCard}
    >
      <div className="sm:flex sm:space-x-4">
        <img
          src={place?.profile_image_url || ""}
          className="w-full h-[87px] sm:w-[60px] sm:h-[60px] rounded-t-[10px] sm:rounded-[10px] object-cover bg-center flex-shrink-0"
        />
        <div className="relative flex flex-col justify-between w-full px-4 mt-1 sm:mt-0 sm:p-0">
          <p className="sub-12 sm:sub-18 line-clamp-1">{place?.name || "-"}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt
                size={15}
                className="flex-shrink-0 w-[9px] sm:w-[15px]"
              />
              <p className="normal-10 sm:normal-14">{`${place?.operation_time[0]?.time_open} AM - ${place?.operation_time[0]?.time_close} PM`}</p>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-2">
              <div className="w-[11px] h-[11px] rounded-full bg-main-1" />
              <p className="sub-16 text-main-1">{place?.rating || 0}</p>
            </div>
            <div className="absolute top-[-55%] right-[3%] sm:hidden w-[67px] h-[31px] rounded-[30px] bg-main-1 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]">
              <p className="text-white sub-16">{place?.rating || 0}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 mt-4 rounded-[10px] px-4 sm:p-0 hidden sm:flex overflow-hidden">
        {_.map(place?.images, (img, i) => (
          <div key={i} className="flex-1 flex-shrink-0 w-ful">
            <img src={img || ""} className="w-full h-[120px] object-cover" />
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 px-4 mt-2 sm:hidden">
        <Carousel images={place.images} />
      </div>
    </div>
  );
};

export default Card;
