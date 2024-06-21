import classNames from "classnames";
import _ from "lodash";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PaginateProps {
  page: number;
  totalPage: number;
  onClick: (p: number) => void;
}

const Paginate = (props: PaginateProps) => {
  const [arrPage, setArrPage] = useState<Array<number>>([]);

  const pageArr = () => {
    let result = [];
    for (let i = 0; i <= props.totalPage; i++) {
      result.push(i + 1);
    }
    setArrPage(result);
  };

  useEffect(() => {
    pageArr();
  }, [props.totalPage]);

  return (
    <div className="flex items-center justify-center w-full h-10 mt-4 space-x-4">
      <div
        className={classNames(
          "flex items-center justify-center w-10 h-10 bg-white flex-shrink-0 border text-secondary-2 rounded-full border-secondary-2 transition duration-300",
          {
            "cursor-pointer": props.page !== 1,
          },
          {
            "cursor-not-allowed bg-secondary-4": props.page === 1,
          }
        )}
        onClick={() => {
          if (props.page !== 1) {
            props.onClick(props.page - 1);
          }
        }}
      >
        <MdKeyboardArrowLeft size={20} />
      </div>
      {_.map(arrPage, (page) => (
        <div
          key={page}
          className={classNames(
            "flex flex-shrink-0 items-center justify-center w-10 h-10 sub-16 rounded-full cursor-pointer transition duration-300",
            {
              "bg-white border border-secondary-2 hover:bg-secondary-4":
                props.page !== page,
            },
            { "bg-main-1 text-white": props.page === page }
          )}
          onClick={() => {
            if (props.page !== page) props.onClick(page);
          }}
        >
          {page}
        </div>
      ))}
      <div
        className={classNames(
          "flex items-center justify-center w-10 h-10 bg-white flex-shrink-0 border text-secondary-2 rounded-full border-secondary-2 transition duration-300",
          {
            "cursor-pointer": props.page !== _.size(arrPage),
          },
          {
            "cursor-not-allowed": props.page === _.size(arrPage),
          }
        )}
        onClick={() => {
          if (props.page !== _.size(arrPage)) {
            props.onClick(props.page + 1);
          }
        }}
      >
        <MdKeyboardArrowRight size={20} />
      </div>
    </div>
  );
};

export default Paginate;
