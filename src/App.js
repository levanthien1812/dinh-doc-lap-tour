import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import Introduction from './pages/Introduction/Introduction';
import Model from './pages/Model/Model';
import Review from './pages/Review/Review';
import Booking from './pages/Booking/Booking';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "/dang-ky",
          element: <SignupPage/>
        },
        {
          path: "/dang-nhap",
          element: <LoginPage/>
        },
        {
          path: "/gioi-thieu",
          element: <Introduction/>
        },
        {
          path: "/mo-hinh",
          element: <Model/>
        },
        {
          path: "/danh-gia",
          element: <Review/>
        },
        {
          path: "/dat-ve",
          element: <Booking/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;
