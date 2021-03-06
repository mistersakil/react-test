import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { get_users_request } from "./servicesUserApi/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "./loadingComp";
import ErrorComp from "./errorComp";
import UserTableComp from "./userTableComp";

const UserApiComponent = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userReducers);
  useEffect(() => {
    document.title = "Users Api Call";
    dispatch(get_users_request());
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-primary mt-5">User Fetch Api</h1>
      {loading ? <LoadingComp /> : error ? <ErrorComp /> : <UserTableComp />}
    </div>
  );
};

export default UserApiComponent;
