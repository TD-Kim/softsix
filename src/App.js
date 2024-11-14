import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import ThemeCustomization from 'themes';

export default function App() {
  ('App');
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<DashboardDefault />} />
    //   </Routes>
    // </BrowserRouter>
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
