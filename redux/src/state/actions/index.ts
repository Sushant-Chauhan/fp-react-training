import { ActionType } from "../action-types";

type DepositAction = {
  type: ActionType.DEPOSIT;
  payload: number;
};

type WithdrawAction = {
  type: ActionType.WITHDRAW;
  payload: number;
};

type BankruptAction = {
  type: ActionType.BANKRUPT;
};

export type Action = DepositAction | WithdrawAction | BankruptAction;
