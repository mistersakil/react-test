import React from "react";
import UserTableRowComp from "./userTableRowComp";
import { ucFirst } from "./settings/functions";
const userTableComp = () => {
  let userFieldsToDisplay = ["id", "name", "email", "website", "phone"];

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            {userFieldsToDisplay.map((field, index) => {
              return field === "id" ? null : (
                <th scope="col" key={index}>
                  {field === "phone"
                    ? ucFirst(field) + " Number"
                    : ucFirst(field)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <UserTableRowComp userFieldsToDisplay={userFieldsToDisplay} />
        </tbody>
      </table>
    </>
  );
};

export default userTableComp;
