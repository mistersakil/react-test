import React, { useEffect, useState } from "react";

const MemoA = () => {
  const [count, countSet] = useState(0);
  useEffect(() => {
    let countInterval = setInterval(() => {
      countSet((state) => state);
    }, 2000);
    return () => {
      clearInterval(countInterval);
    };
  });

  console.log("memo rendered");
  return (
    <div className="text-center mt-5">
      <h1 className="text-primary">Count = {count}</h1>
    </div>
  );
};

export default MemoA;
