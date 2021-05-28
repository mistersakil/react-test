import React, { useState } from "react";

const Hoc = (NewComponent) => {
  const InnerComponent = (props) => {
    const [count, countSet] = useState(0);
    const up = () => {
      countSet(count + 1);
    };
    const reset = () => {
      countSet(0);
    };

    return (
      <NewComponent
        up={up}
        count={count}
        reset={reset}
        {...props}
      ></NewComponent>
    );
  };
  return InnerComponent;
};

export default Hoc;
