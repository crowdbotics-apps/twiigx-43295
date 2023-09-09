import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const stripepaymentapisupport_post_v1_payment_intents_create = createAsyncThunk(
  "stripepaymentapisupport_response_post_CreatePaymentIntents/stripepaymentapisupport_post_v1_payment_intents_create",
  async payload => {
    const response = await apiService.stripepaymentapisupport_post_v1_payment_intents_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const stripepaymentapisupport_response_post_CreatePaymentIntentsSlice = createSlice(
  {
    name: "stripepaymentapisupport_response_post_CreatePaymentIntents",
    initialState,
    reducers: {},
    extraReducers: {
      [stripepaymentapisupport_post_v1_payment_intents_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [stripepaymentapisupport_post_v1_payment_intents_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [stripepaymentapisupport_post_v1_payment_intents_create.rejected]: (
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
  stripepaymentapisupport_post_v1_payment_intents_create,
  slice: stripepaymentapisupport_response_post_CreatePaymentIntentsSlice
}
