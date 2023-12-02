import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';

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
        }
      ]
      
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;
