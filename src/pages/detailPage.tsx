import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/layout";
import { Place } from "../types/types";
import classNames from "classnames";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [data, setData] = useState<Place>();

  // Fetching Detail
  useEffect(() => {
    const preparationData = async () => {
      try {
        const resp = await axios.get("/data.json");
        const findPlaceById = _.find(resp.data, { id: Number(id) });
        setData(findPlaceById);
      } catch (err) {
        console.log(err);
      }
    };
    preparationData();
  }, []);

  const checkDateOpen = (time: {
    day: string;
    time_open: string;
    time_close: string;
  }) => {
    if (time.time_open === "closed") {
      return `${time.day}: Closed`;
    } else {
      return `${time.day}: ${time.time_open} AM - ${time.time_close} PM`;
    }
  };

  return (
    <Layout>
      <div className="w-full h-full px-4 py-6 md:px-12">
        <div className="max-w-[1440px] mx-auto h-full">
          <div
            className="w-[98px] h-[39px] rounded-[30px] sub-18 bg-main-1 text-white flex justify-center items-center hover:bg-main-2 transition duration-300 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {"< BACK"}
          </div>

          <div className="flex items-center justify-between w-full h-[34px] mt-6 bg-white md:hidden rounded-[30px] relative overflow-hidden drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]">
            <div
              className={classNames(
                "z-20 flex items-center justify-center w-1/2 cursor-pointer",
                { "text-white": tab === 1 },
                { "text-main-1": tab === 2 }
              )}
              onClick={() => setTab(1)}
            >
              <p className="sub-14">INFORMATION</p>
            </div>
            <div
              className={classNames(
                "z-20 flex items-center justify-center w-1/2 cursor-pointer",
                { "text-main-1": tab === 1 },
                { "text-white": tab === 2 }
              )}
              onClick={() => setTab(2)}
            >
              <p className="sub-14">IMAGE</p>
            </div>
            <div
              className={classNames(
                "absolute top-0 w-[50%] h-full bg-main-1 rounded-[30px] z-10",
                { "left-0": tab === 1 },
                { "right-0": tab === 2 }
              )}
            />
          </div>

          <div className="h-full mt-6 pb-[5rem] md:pt-[24px] px-[24px] overflow-y-scroll md:bg-main-3 rounded-[10px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]">
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
              <div
                className={classNames(
                  "md:w-[677px] h-fit bg-white rounded-[10px] flex-shrink-0 overflow-hidden drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]",
                  { block: tab === 1 },
                  { "hidden md:block": tab === 2 }
                )}
              >
                <img
                  src={data?.profile_image_url}
                  alt=""
                  className="w-full h-[380px] object-cover bg-center"
                />
                <div className="flex flex-col p-6 space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <p className="sub-24">{data?.name || "-"}</p>
                    <div className="flex items-center flex-shrink-0 space-x-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-main-1" />
                      <p className="sub-16 text-main-1">{data?.rating || 0}</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:flex sm:space-x-10">
                    <p className="title-16 w-full sm:w-[20%]">Address :</p>
                    <p className="normal-16">{data?.address || "-"}</p>
                  </div>
                  <div className="space-y-3 sm:flex sm:space-x-10">
                    <p className="title-16 w-full sm:w-[20%]">Opening Hour :</p>
                    <div className="normal-16">
                      {_.map(data?.operation_time, (time, i) => (
                        <div key={i} className="mb-2">
                          {checkDateOpen(time)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={classNames(
                  "w-full h-fit bg-white rounded-[10px] overflow-hidden p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]",
                  { "hidden md:block": tab === 1 },
                  { block: tab === 2 }
                )}
              >
                <p className="mb-6 sub-20">Images</p>
                <div className="rounded-[10px]">
                  {_.map(data?.images, (img, i) => (
                    <div key={i} className="flex-1 flex-shrink-0 w-ful">
                      <img
                        src={img || ""}
                        className="w-full h-[318px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
