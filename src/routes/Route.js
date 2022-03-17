import { RouteLinks } from "./RouteLink";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import CreateMarketer from "../Pages/CreateMarketer";
import MarketerDetails from "../Pages/MarketerDetails";
import Dashboard from "../features/Dashboard/index";

export const DashboardRoute = [
  {
    component: <Dashboard />,
    path: RouteLinks.overview,
  },
  {
    component: <Agents />,
    path: RouteLinks.agent,
  },
  {
    component: <Profile />,
    path: RouteLinks.profile,
  },
];

// export const AuthRoute = [
//   {
//     component: <SignIn />,
//     path: RouteLinks.signin,
//   },
// ];
