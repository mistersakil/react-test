import React, { useState } from "react";
import "./Keep.css";

const Keep = () => {
  const itemInitial = { title: "", content: "" };
  const [item, itemSet] = useState(true);
  const [itemData, itemDataSet] = useState(itemInitial);
  const [itemList, itemListSet] = useState([]);
  const itemHandler = (event) => {
    itemSet((item) => !item);
    itemDataSet(itemInitial);
  };
  const itemDataHandler = (event) => {
    const { name, value } = event.target;

    itemDataSet((itemOld) => {
      return { ...itemOld, [name]: value };
    });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    itemListSet((itemListOld) => {
      return [...itemListOld, itemData];
    });
    itemDataSet(itemInitial);
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        {item && (
          <input type="text" onClick={itemHandler} placeholder="Take a note" />
        )}
        {!item && (
          <>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={itemDataHandler}
              value={itemData.title}
              autoFocus
            />
            <textarea
              name="content"
              cols="30"
              rows="10"
              placeholder="Take a note"
              onChange={itemDataHandler}
              value={itemData.content}
            ></textarea>
            <input type="submit" value="Save" />
            <input type="reset" value="Close" onClick={itemHandler} />
          </>
        )}
      </form>
      {itemList.length ? (
        <ul>
          {itemList.map((item, index) => {
            return (
              <li key={index}>
                <h6>{item.title.toUpperCase()}</h6>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Keep;
