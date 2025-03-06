import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
