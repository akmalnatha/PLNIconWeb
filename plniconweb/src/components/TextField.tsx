import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./textfield.css"

function TextField({
  id,
  style,
  type,
  placeholder,
  onChange,
  value,
  required,
}: {
  id: string;
  style?: string;
  type: "standart" | "pass" | "area" | "datepicker" | "dropdown" | "search";
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  required?: boolean;
}) {
  const [description, setDescription] = useState("");
  const [inputValue, setInputValue] = useState(value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const [currType, setCurrType] = useState("password");
  const [icon, setIcon] = useState(<AiFillEyeInvisible></AiFillEyeInvisible>);
  const handleToggle = () => {
    if (currType === "password") {
      setIcon(<AiFillEye></AiFillEye>);
      setCurrType("text");
    } else {
      setIcon(<AiFillEyeInvisible></AiFillEyeInvisible>);
      setCurrType("password");
    }
  };

  return (
    <>
      {type == "standart" && (
        <div className={style + " w-full"}>
          <input
            required={required}
            type="text"
            placeholder={placeholder}
            className="w-full px-3 py-2 text-black bg-white border-2 border-[#6B6B6B] hover:border-blue-hover focus:outline-blue-primary rounded-[10px]"
            onChange={handleChange}
          />
        </div>
      )}

      {type == "pass" && (
        <div className={style + " w-full"}>
          <div className="relative flex items-center">
            <input
              id={id}
              required={required}
              type={currType}
              placeholder={placeholder}
              className="w-full px-3 py-2 pr-7 sm:pr-10 md:pr-10 lg:pr-14 text-black bg-white border-2 border-[#6B6B6B] hover:border-blue-hover focus:outline-blue-primary rounded-[10px]"
            />
            <span
              className="absolute right-[3%] flex cursor-pointer items-center justify-around text-lg lg:text-2xl xl:right-[2%]"
              onClick={handleToggle}
            >
              {icon}
            </span>
          </div>
        </div>
      )}

      {type == "area" && (
        <div className={style + " w-full"}>
          <textarea
            required={required}
            onChange={(e) => setDescription(e.target.value)}
            name="desc"
            id="desc"
            value={value}
            placeholder={placeholder}
            className="px-3 py-2 text-black min-h-[40px] w-full rounded-[10px] border-2 border-[#6B6B6B] hover:border-black bg-white lg:h-[200px]"
          ></textarea>
        </div>
      )}

      {type == "search" && (
        <div className={style + " w-full"}>
          <div className="pointer-events-none flex w-full justify-between rounded-lg border-2 border-[#6B6B6B] px-2 focus-within:border-black hover:border-black hover:focus-within:border-black ">
            <input
              required={required}
              tabIndex={0}
              type="text"
              placeholder={placeholder}
              className="pointer-events-auto w-full border-none px-1 py-2 caret-kOrange-400 outline-none "
              value={inputValue}
              onChange={handleChange}
            />
            <img src="assets/search_icon.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default TextField;
