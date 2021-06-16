import Stripe from "stripe";
import { axiosService } from "../../services/ServiceBase"
const stripe = new Stripe(`${process.env.STRIPE_SECRET}`)

// eslint-disable-next-line import/no-anonymous-default-export
export default  async (req, res) => {
  const { id, amount, description, user_id, course_id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description,
      payment_method: id,
      confirm: true

    });
    if (payment) {
      axiosService.post(`/course_users`, { user_id, course_id, confirm: true })
      return res.status(200).json({
        data: true
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message
    })
  }
}
