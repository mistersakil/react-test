import React from "react";

const ImgSearchResult = (props) => {
  let { imgNameForSearch } = props;
  let imgSrc = `https://source.unsplash.com/300x200/?${imgNameForSearch}`;
  return (
    <>
      <img src={imgSrc} alt="random images" />
    </>
  );
};

export default ImgSearchResult;
