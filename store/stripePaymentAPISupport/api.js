import axios from "axios"
import { STRIPE_PAYMENT_API_SUPPORT_TOKEN } from "react-native-dotenv"
const stripePaymentAPISupport = axios.create({
  baseURL: "https://api.stripe.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRIPE_PAYMENT_API_SUPPORT_TOKEN}`
  }
})
function stripepaymentapisupport_get_v1_balance_list(payload) {
  return stripePaymentAPISupport.get(`/v1/balance`)
}
function stripepaymentapisupport_post_v1_payment_intents_create(payload) {
  return stripePaymentAPISupport.post(`/v1/payment_intents`, payload.data)
}
export const apiService = {
  stripepaymentapisupport_get_v1_balance_list,
  stripepaymentapisupport_post_v1_payment_intents_create
}
