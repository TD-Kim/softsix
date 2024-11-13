import { createBrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';

console.log('routes index');

// const router = createBrowserRouter([MainRoutes, LoginRoutes], {
const router = createBrowserRouter([MainRoutes], {
  basename: process.env.PUBLIC_URL,
});

export default router;
