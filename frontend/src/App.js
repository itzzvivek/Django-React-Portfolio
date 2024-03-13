import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Work from "./components/Work";
import About from "./components/About";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
      // <Contact/>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    },
    {
      path: '/work',
      element: <><Navbar /><Work /></>
    },
    {
      path: '/newsletter',
      element: <><Navbar /><Newsletter /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

