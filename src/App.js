import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import BookTicketPage from "./pages/bookticket/BookTicketPage";
import BookTicketDetailPage from "./pages/bookticketdetail/BookTicketDetailPage";
import PaymentGuidePage from "./pages/paymentguide/PaymentGuidePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ModelPage from "./pages/model/ModelPage";
import Introduction from "./pages/Introduction/Introduction";
import Profile from "./pages/Profile/Profile";
import Review from "./pages/Review/Review";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/dang-ky",
          element: <SignupPage />,
        },
        {
          path: "/dang-nhap",
          element: <LoginPage />,
        },
        {
          path: "/dat-ve",
          element: <BookTicketPage />,
        },
        {
          path: "/gioi-thieu",
          element: <Introduction />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/chitiet-datve",
          element: <BookTicketDetailPage />,
        },
        {
          path: "/huongdan-thanhtoan",
          element: <PaymentGuidePage />,
        },
        {
          path: "/thanhtoan",
          element: <CheckoutPage />,
        },
        {
          path: "/mo-hinh",
          element: <ModelPage />
        },
        {
          path: "/reviews",
          element: <Review />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
