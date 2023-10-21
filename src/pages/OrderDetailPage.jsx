import React from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import BackNavigation from "../components/shop/BackNavigation";
import OrderDetails from "../components/account/OrderDetails";

const OrderDetailPage = () => {
  return (
    <>
      <TopNavbar />
      <BackNavigation path={"/account/orders"} />
      <OrderDetails />
      <Footer />
    </>
  );
};

export default OrderDetailPage;
