import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '@/pages/Admin/ui/AdminSidebar/AdminSidebar';
import { Header } from '@/widgets/header';
import styles from './styles.module.css';

function AdminLayout() {
  const location = useLocation();
  const activeSection = location.pathname.split('/').pop() || 'specializations';
  return (
    <main>
      <Header />
      <div className={styles.adminMain}>
        <AdminSidebar activeSection={activeSection} />
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
export default AdminLayout;
