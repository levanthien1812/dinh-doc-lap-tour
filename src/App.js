<<<<<<< HEAD
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
import Review from "./pages/Review/Review"
=======
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import BookTicketPage from './pages/bookticket/BookTicketPage';
import Introduction from './pages/Introduction/Introduction';
import Model from './pages/Model/Model';
import Review from './pages/Review/Review';
import Booking from './pages/Booking/Booking';
>>>>>>> 08cb67a (add header, footer page)

function App() {
  const router = createBrowserRouter([
    {
      path: "",
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
          element: <Review />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
