import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import OrderArea from "@/components/order/order-area";

export const metadata = {
  title: "Shofy - Order Page",
};

export default function OrderPage({ params: { id } }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <OrderArea orderId={id} />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
