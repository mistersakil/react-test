import React from "react";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";

const ButtonsReducer = () => {
  return (
    <>
      <button type="button">
        <MdAddCircle className="icon_custom_style" />
      </button>
      <button type="button">
        <IoIosRemove className="icon_custom_style" />
      </button>
    </>
  );
};

export default ButtonsReducer;
