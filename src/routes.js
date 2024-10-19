import App from "./App";
import ErrorPage from "./ErrorPage";
import Testimonials from "./pages/testimonials/Testimonials";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/:id",
  //   element: <App />,
  // },
  {
    path: "/Testimonials",
    element: <Testimonials />,
  },
];

export default routes;
