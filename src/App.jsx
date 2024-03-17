import Home from "./pages/Home/Home"
import Listing from "./pages/Listing/Listing"
import SingleProperty from "./pages/SingleProperty/SingleProperty"
import Layout from "./layout/Layout"

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/property-listings',
          element: <Listing />,
        },
        {
          path: '/property-listings/:id',
          element: <SingleProperty />,
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App