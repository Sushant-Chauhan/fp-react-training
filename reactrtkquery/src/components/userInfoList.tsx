import React from "react";
import { useGetUserInfoQuery } from "../RTK/userslice";
import styles from "./userinfoform.module.css";
import { useDeleteUserInfoMutation } from "../RTK/userslice";
const UserInfoList = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetUserInfoQuery();
  const [deleteUserInfo] = useDeleteUserInfoMutation();

  const onDeleteUserInfo = (id?: string) => {
    console.log("Deleting user Info: ", id);
    deleteUserInfo(id);
  };
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something went wrong</h3>}
      {isSuccess &&
        data.map((userInfo) => (
          <div key={userInfo.id} className={styles.listData}>
            <p>{userInfo.id}</p>
            <p>{userInfo.firstName}</p>
            <p>{userInfo.lastName}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.phoneNumber}</p>
            <p>{userInfo.userName}</p>
            <p>{userInfo.password}</p>
            <button
              onClick={() => {
                onDeleteUserInfo(userInfo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default UserInfoList;
