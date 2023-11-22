import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AccountantDetails from "../Pages/Accountant_Details/AccountantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/accountant_details/:id",
        element: <AccountantDetails></AccountantDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/accountant_details/${params?.id}`),
      },
    ],
  },
]);

export default router;
