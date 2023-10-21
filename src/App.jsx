import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import SelectProductPage from "./SelectProductPage";
import HowWorksPage from "./pages/HowWorksPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import { ProductProvider } from "./context/ProductContext";
import ShopePage from "./pages/ShopePage";
import Profile from "./components/account/Profile";
import MyOrders from "./components/account/MyOrders";
import ProductDetailPage from "./pages/ProductDetailPage";
import AccountPage from "./pages/AccountPage";
import ChangePassword from "./components/account/ChangePassword";
import { UserProvider } from "./context/UserContext";
import OrderDetailPage from "./pages/OrderDetailPage";
import ContactUsPage from "./pages/ContactUsPage";
import FaqsPage from "./pages/FaqsPage";
import TermConditionsPage from "./pages/TermConditionsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="how-it-works" element={<HowWorksPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="subscribe" element={<SelectProductPage />} />
              <Route path="shop" element={<ShopePage />} />
              <Route path="subscribe/checkout" element={<CheckoutPage />} />
              <Route path="contact-us" element={<ContactUsPage />} />
              <Route path="faqs" element={<FaqsPage />} />
              <Route path="term-conditions" element={<TermConditionsPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="reset-password" element={<ResetPasswordPage />} />
              <Route
                path="product/:productId"
                element={<ProductDetailPage />}
              />
              <Route path="account" element={<AccountPage />}>
                <Route path="profile" element={<Profile />} />
                <Route path="orders" element={<MyOrders />} />
                <Route path="change_password" element={<ChangePassword />} />
              </Route>
              <Route
                path="account/orders/:orderId"
                element={<OrderDetailPage />}
              />
            </Routes>
          </Router>
        </ProductProvider>
      </UserProvider>
    </>
  );
};

export default App;
