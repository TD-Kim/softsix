import { createBrowserRouter } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

const router = createBrowserRouter([MainRoutes, LoginRoutes], {
  basename: process.env.PUbLIC_URL,
});

export default router;
