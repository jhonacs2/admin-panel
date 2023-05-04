import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {DataUser} from "../reducers/user.reducer";

export const selectUser = (state: AppState) => state.user.user
export const selectToken = (state: AppState) => state.user.user.token

export const selectUserData = createSelector(
  selectUser,
  (state: DataUser) => state
)

export const selectTokenUser = createSelector(
  selectToken,
  (state) => state
)
