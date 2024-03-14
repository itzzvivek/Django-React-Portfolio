import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
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
      path: '/contact',
      element: <><Navbar /><Contact /></>
    },
    {
      path: '/newsletter',
      element: <><Navbar /><Newsletter /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Message />

    </>
  );
}



function Message() {
  const footerLine = "Made With ❤️ By V1VEK";

  return <div className='text-teal-600 text-center fixed bottom-0 w-full'>{footerLine}</div>;
}

export default App;


