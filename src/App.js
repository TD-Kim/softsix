import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import ThemeCustomization from 'themes';

export default function App() {
  console.log('App');
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<DashboardDefault />} />
    //   </Routes>
    // </BrowserRouter>
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
