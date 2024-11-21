import { lazy } from 'react';

import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(
  lazy(() => import('pages/component-overview/typography'))
);
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(
  lazy(() => import('pages/extra-pages/sample-page'))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    // {
    //   path: '/',
    //   element: <DashboardDefault />,
    // },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: 'equipmentRegister',
      element: <Color />,
    },
    {
      path: 'memberManagement',
      element: <SamplePage />,
    },
    {
      path: 'equipmentStatus',
      element: <Shadow />,
    },
    {
      path: 'notice',
      element: <Typography />,
    },
  ],
};

export default MainRoutes;
