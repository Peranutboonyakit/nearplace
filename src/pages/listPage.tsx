import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";

import Dropdown from "../components/dropdown";
import Layout from "../components/layout";
import TextInput from "../components/textInput.tsx";
import { dropdownArray } from "../constants/contants.ts";
import { PlaceType } from "../types/types.ts";
import Card from "../components/card.tsx";
import Paginate from "../components/paginate.tsx";

const ListPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [placeArr, setPlaceArr] = useState<PlaceType>([]);
  const [filterData, setFilterData] = useState<PlaceType>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const perPage = 9;

  // Fetching Default
  useEffect(() => {
    const preparationData = async () => {
      try {
        const resp = await axios.get("/data.json");
        setPlaceArr(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    preparationData();
  }, []);

  // Fetching Filter
  useEffect(() => {
    const preparationFilterData = async () => {
      try {
        let result = placeArr;
        if (category !== "all") {
          result = _.filter(result, (cate) =>
            _.includes(cate?.categories, category)
          );
        }
        if (searchWord) {
          result = _.filter(result, (char) =>
            char?.name.toLowerCase().includes(searchWord.toLowerCase())
          );
        }
        setFilterData(result);
        setTotalPage(Math.floor(_.size(result) / perPage));
      } catch (err) {
        console.log(err);
      }
    };

    preparationFilterData();
    setPage(1);
  }, [searchWord, category, placeArr]);

  // Total Array
  const startIndex = (page - 1) * perPage;
  const totalDataArray = _.slice(filterData, startIndex, startIndex + perPage);

  return (
    <Layout>
      <div className="w-full h-full px-4 py-6 md:px-12">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="mb-4 space-y-3 md:space-y-3 md:flex md:items-center md:justify-between">
            <p className="sub-24">Place List</p>
            <div className="space-y-3 md:space-y-0 md:items-center md:space-x-3 md:flex">
              <Dropdown
                option={dropdownArray}
                value={category}
                onClick={(v: string) => setCategory(v)}
              />
              <div className="w-[1.5px] h-[25px] bg-main-1 hidden md:inline-block" />
              <TextInput
                value={searchWord}
                placeholder="Search name..."
                onChange={(v: string) => setSearchWord(v)}
              />
            </div>
          </div>

          <div className="h-full pb-[5rem] overflow-y-scroll">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {_.map(totalDataArray, (item) => (
                <div key={item.name} className="">
                  <Card place={item} />
                </div>
              ))}
            </div>
            <Paginate
              page={page}
              totalPage={totalPage}
              onClick={(p) => {
                setPage(p);
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListPage;
