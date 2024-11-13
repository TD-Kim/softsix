import 'App.css';
import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import ThemeCustomization from 'themes';

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
