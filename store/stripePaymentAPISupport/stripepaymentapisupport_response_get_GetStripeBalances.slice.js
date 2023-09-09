import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripepaymentapisupport_get_v1_balance_list = createAsyncThunk(
  "stripepaymentapisupport_response_get_GetStripeBalances/stripepaymentapisupport_get_v1_balance_list",
  async payload => {
    const response = await apiService.stripepaymentapisupport_get_v1_balance_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripepaymentapisupport_response_get_GetStripeBalancesSlice = createSlice(
  {
    name: "stripepaymentapisupport_response_get_GetStripeBalances",
    initialState,
    reducers: {},
    extraReducers: {
      [stripepaymentapisupport_get_v1_balance_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [stripepaymentapisupport_get_v1_balance_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [stripepaymentapisupport_get_v1_balance_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  stripepaymentapisupport_get_v1_balance_list,
  slice: stripepaymentapisupport_response_get_GetStripeBalancesSlice
}
