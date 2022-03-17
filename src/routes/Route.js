import { RouteLinks } from "./RouteLink";
import Dashboard from "../Pages/Dashboard";
import CreateMarketer from "../Pages/CreateMarketer";
import MarketerDetails from "../Pages/MarketerDetails";

export const DashboardRoute = [
  {
    component: <Dashboard />,
    path: RouteLinks.dashboard,
  },
  {
    component: <CreateMarketer />,
    path: RouteLinks.createmarketer,
  },
  {
    component: <MarketerDetails/>,
    path: RouteLinks.marketerdetails,
  },
];
