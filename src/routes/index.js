import Home from "pages/Home"
import Detail from "pages/DetailPage"

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    name: "Detail",
    path: '/:id',
    exact: true,
    component: Detail
  }
];

export default routes;