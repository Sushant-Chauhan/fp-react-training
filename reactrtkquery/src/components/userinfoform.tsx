import { MouseEvent } from "react";
import { useAddUserInfoMutation } from "../RTK/userslice";

import style from "./userinfoform.module.css";

const UserInfoForm = () => {
  const [addUserInfo] = useAddUserInfoMutation();

  const onFormSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formDataValue = new FormData(event.target as HTMLFormElement);
    let formData = Object.fromEntries(formDataValue);
    await addUserInfo(formData);
    console.log(formData);
  };

  return (
    <form className="UserInfoForm" onSubmit={onFormSubmit}>
      <div className={style.FormInput}>
        <label>Title:</label>
        <select name={"title"} id={"Title"}>
          <option value="0">None</option>
          <option value="1">Mr.</option>
          <option value="2">Mrs.</option>
          <option value="3">Ms.</option>
          <option value="4">Other</option>
        </select>
      </div>
      <div className={style.FormInput}>
        <label>First Name:</label>
        <input type="text" id="FirstName" name="firstName" />
      </div>
      <div className={style.FormInput}>
        <label>Last Name:</label>
        <input type="text" id="LastName" name="lastName" />
      </div>
      <div className={style.FormInput}>
        <label>Email:</label>
        <input type="text" id="Email" name="email" />
      </div>
      <div className={style.FormInput}>
        <label>Phone:</label>
        <input type="text" id="Phone" name="phoneNumber" />
      </div>
      <div className={style.FormInput}>
        <label>User Name:</label>
        <input type="text" id="UserName" name="userName" />
      </div>
      <div className={style.FormInput}>
        <label>Password:</label>
        <input type="text" id="UserPassword" name="password" />
      </div>
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default UserInfoForm;
