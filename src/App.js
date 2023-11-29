import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomePage/>
    }
  ])

  return <RouterProvider router={router}/>
}

export default App;
