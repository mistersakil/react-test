import React, { useContext } from "react";
import { MdAddCircle } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { counterContext } from "./UseEffect";

const Buttons = () => {
  //   const counterUpHandler = () => {};
  //   const counterDownHandler = () => {};
  const { counterUpHandler, counterDownHandler } = useContext(counterContext);

  return (
    <>
      <button type="button" onClick={counterUpHandler}>
        <MdAddCircle className="icon_custom_style" />
      </button>
      <button type="button" onClick={counterDownHandler}>
        <IoIosRemove className="icon_custom_style" />
      </button>
    </>
  );
};

export default Buttons;
