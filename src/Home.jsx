import { useState } from "react";
const Home = (props) => {
  const [imgName, imgNameSet] = useState("");
  const imgNameChangeHandler = (event) => {
    imgNameSet(event.target.value);
  };
  return (
    <>
      <h2>Welcome to {props.title} Page</h2>
      <p>
        <label htmlFor="imgSearch">Search for a Unsplash Random Image</label>
        <input
          type="text"
          value={imgName}
          placeholder="keywords"
          onChange={imgNameChangeHandler}
          autoFocus
        />

        {imgName && (
          <img
            src={`https://source.unsplash.com/300x200/?${imgName}`}
            alt="random images"
          />
        )}
      </p>
    </>
  );
};

export default Home;
