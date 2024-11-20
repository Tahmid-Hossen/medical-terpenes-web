import OrderConfirmation from "@/components/Checkout/OrderConfirmation";
import { getOrderDetails } from "@/services/getOrderDetails";

const OrderConfirmationPage = async ({params: {order_id}}) => {
  // console.log(order_id)
  const orderDetails = await getOrderDetails(order_id);
  console.log(orderDetails.data)

  return (
    <div>
      <OrderConfirmation order={orderDetails?.data} />
    </div>
  );
};

export default OrderConfirmationPage;