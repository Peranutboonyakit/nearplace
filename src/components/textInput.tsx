import { FaSearch } from "react-icons/fa";

interface TextInputProps {
  value: string;
  placeholder: string;
  onChange: (e: string) => void;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className="w-full h-[40px] md:w-[400px] border border-main-1 rounded-[50px] bg-white flex items-center justify-between overflow-hidden relative">
      <input
        className="w-[90%] h-full p-4 bg-white focus:outline-none normal-14 text-secondary-1"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
      <FaSearch className="absolute text-secondary-2 right-3" size={14} />
    </div>
  );
};

export default TextInput;
