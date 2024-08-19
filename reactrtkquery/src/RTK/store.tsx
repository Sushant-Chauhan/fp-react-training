import { configureStore } from "@reduxjs/toolkit";
import { userInfoApi } from "./userslice";

export const store = configureStore({
  reducer: {
    [userInfoApi.reducerPath]: userInfoApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(userInfoApi.middleware),
});
