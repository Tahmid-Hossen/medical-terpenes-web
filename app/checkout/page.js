// import Checkout from "@/components/Checkout/Checkout";
import dynamic from "next/dynamic";

const Checkout = dynamic(() => import('../../components/Checkout/Checkout'), {ssr: false})


const CheckoutPage = () => {
  return (
    <>
      <Checkout/>
    </>
  );
};

export default CheckoutPage;