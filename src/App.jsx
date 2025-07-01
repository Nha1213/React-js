import { createBrowserRouter, RouterProvider } from "react-router-dom"; // corrected import path
import {
  About,
  ContectUs,
  Homepage,
  Login,
  // CardPage,
  PhonePage,
  PicPage,
  // Products
} from "./controllerRouter";
import RouterHome from "./LayOuts/RouterHome";
import Myprofile from "./ControllerInfor/Myprofile";
import Information from "./ControllerInfor/Information";
import Experiences from "./ControllerInfor/Experiences";
import Project from "./ControllerInfor/Project";
import OnlyPage from "./ControllerInfor/OnlyPage";
import Card from "./Page/Card";
import LoginSub from "./Page/component/LoginSub";
import Register from "./Page/component/Register";
import Cartpage from "./ControllerInfor/Cartpage";
import Products from "./ControllerInfor/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterHome />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            // path: "/",
            index: true,
            element: <Myprofile />,
            // loader: UseDataLoader,
          },
          {
            path: ':id',
            element: <OnlyPage />,
            // loader: DataOnly,
          },
          {
            path: "Information",
            element: <Information />,
          },
          {
            path: ":id",
            element: <OnlyPage />,
          },
          {
            path: "/Information/:id",
            element: <OnlyPage />,
          },
          {
            path: "Experiences",
            element: <Experiences />,
          },
          {
            path: "/Experiences/:id",
            element: <OnlyPage />,
          },
          {
            path: "Project",
            element: <Project />,
          },
          {
            path: "/Project/:id",
            element: <OnlyPage />,
          },
          {
            path: "Discount",
            element: <Products />,
          },
          {
            path: "/Discount/:id",
            element: <OnlyPage />,
          },
        ]
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contect",
        element: <ContectUs />,
      },
      {
        path: "login",
        element: <Login />, // Login must include <Outlet /> for children
        children: [
          {
            // path: "LoginSub",
            index: true,
            element: <LoginSub />,
          },
          {
            path: "Register",
            element: <Register />,
          },
          // { path: "*", element: <NotFound /> }
        ]
      },
      {
        path: "Card",
        element: <Card />,
        children:[
          {
            index: true,
            element: <Cartpage />
          }
        ]
      },
      // {
      //   path: "product",
      //   element: <ProductHome />,
      //   children: [
      //   ],
      // }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
