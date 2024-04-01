import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import About from "./components/About";
import SocialFooter from './components/SocialFooter';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
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
    <div>
      <RouterProvider router={router} />
      <SocialFooter />
      <Message />

    </div>
  );
}



function Message() {
  const footerLine = "Made With ❤️ By V1VEK";

  return <div className='text-white text-center fixed bottom-0 w-full'>{footerLine}</div>;
}


export default App;


