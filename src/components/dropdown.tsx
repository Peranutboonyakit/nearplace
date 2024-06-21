import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import classNames from "classnames";
import { FaCaretDown } from "react-icons/fa";

interface DropdownProps {
  option: Array<{ title: string; value: string }>;
  value: string;
  onClick: (v: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>(props.value);
  const [open, setOpen] = useState<boolean>(false);

  const findTitle = () => {
    let result = _.find(props.option, (value) => value.value === props.value);
    if (result) setTitle(result.title);
  };

  const onClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    findTitle();

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [props.value]);

  return (
    <div
      ref={ref}
      className="w-full h-[40px] md:w-[185px] p-4 border border-main-1 rounded-[50px] bg-white flex items-center justify-between cursor-pointer relative"
      onClick={() => setOpen(!open)}
    >
      <p className="normal-14 text-secondary-1">{title}</p>
      <div
        className={classNames("rotate-0 transition duration-300", {
          "rotate-180": open,
        })}
      >
        <FaCaretDown className="text-secondary-2" />
      </div>
      {open && (
        <div className="absolute left-0 bg-white top-[120%] w-full rounded-[10px] z-50 overflow-hidden shadow-lg">
          {_.map(props.option, (item, i) => (
            <div
              key={i}
              className="p-4 transition duration-300 normal-14 text-secondary-1 hover:bg-secondary-4"
              onClick={() => props.onClick(item.value)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
