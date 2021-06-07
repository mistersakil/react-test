import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { get_users_request } from "./servicesUserApi/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserApiComponent = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userReducers);
  useEffect(() => {
    dispatch(get_users_request());
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-primary mt-5">User Fetch Api</h1>
      {loading ? <h4 className="text-info">Loading...</h4> : "data"}
    </div>
  );
};

export default UserApiComponent;
