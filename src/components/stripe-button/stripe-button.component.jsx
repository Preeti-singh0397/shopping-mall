import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceStripe = price * 100;
    const publisableKey = "pk_test_51HzE2sEwlksvjz5sqjYy6mrJjtmNnMMLCWinAzMR4MGpjrcRfIkypXuVt45KRklcI1aPwZGEuRm0cfk8Tc8BVSfi00peL0iNO6";

    const OnToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Shop Ltd"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your Total Amount is ${price}`}
            amount={priceStripe}
            panelLabel="Pay Now"
            token={OnToken}
            stripeKey={publisableKey}
        />
    )
}

export default StripeCheckoutButton;