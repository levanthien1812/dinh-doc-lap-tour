import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import BookTicketPage from './pages/bookticket/BookTicketPage';

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
          path: "/dat-ve",
          element: <BookTicketPage/>
        }
      ]
      
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;
