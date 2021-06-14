
import { useState } from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";


const CheckoutForm = ({success, course, currentUser}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [active, setActive] = useState(true)
  const [error, setError] = useState()

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setActive(false)

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      // confirm: true
    });

    if (error) {
      setError(error)
      console.log('[error]', error);
    } else {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('/api/charge/', { user_id: currentUser?.id, course_id: course?.id, id: id, amount: course?.requirement.price * 100, description: `payment for ${course?.name}` })
        success();
      } catch (error) {
        console.log(error)
        setError(error)
      }
      // console.log('[PaymentMethod]', paymentMethod);
    }
    setActive(true)
  };

  return <form className="w-50" onSubmit={handleSubmit}>
    <CardElement
      className="border p-2"
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button type="submit" className="mt-4 btn btn-default" disabled={!stripe && !active}>
      Buy
    </button>
  </form>
}

export default CheckoutForm;