import React from "react";
import { useSelector } from "react-redux";

const UserTableRowComp = ({ userFieldsToDisplay }) => {
  const { users } = useSelector((state) => state.userReducers);
  return (
    <>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            {userFieldsToDisplay.map((field, index) => {
              return field === "id" ? (
                <th scope="row" key={user.id}>
                  {user[field]}
                </th>
              ) : (
                <td key={`${user.id}_${index}`}>{user[field]}</td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default UserTableRowComp;
