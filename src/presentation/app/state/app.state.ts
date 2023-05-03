import {ActionReducerMap} from "@ngrx/store";
import {userReducer, UserState} from "./reducers/user.reducer";

export interface AppState {
  user: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: userReducer
};
