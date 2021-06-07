import React from "react";
import UserTableRowComp from "./userTableRowComp";
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
                  {field}
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
