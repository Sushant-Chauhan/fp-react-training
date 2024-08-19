import { combineReducers } from "redux";

import { bankReducer } from "./bankReducer";

export const combinedReducers = combineReducers({
  bank: bankReducer,
});

export type State = ReturnType<typeof combinedReducers>;
