import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import specializationsIcon from '@/shared/assets/medal.svg';
import { Button } from '@/shared/ui/button';
import { useLogoutMutation } from '@/features/auth/api/authApi';
import { useDispatch } from 'react-redux';
import { logout } from '@/features/auth/model/authSlice';

interface AdminSidebarProps {
  activeSection: string;
}

function AdminSidebar({ activeSection }: AdminSidebarProps) {
  const [logoutMutation] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuItems = [
    {
      to: '/admin/specializations',
      label: 'Специализации',
      icon: specializationsIcon,
      id: 'specializations',
    },
  ];
  const handleLogout = async () => {
    dispatch(logout());
    logoutMutation();
    navigate('/auth', { replace: true });
  };
  return (
    <aside className={styles.adminSidebar}>
      <nav className={styles.adminNavigation}>
        {menuItems.map(({ to, label, icon: Icon, id }) => (
          <Link
            key={id}
            to={to}
            className={`${styles.adminNavigationItem} ${activeSection === id ? styles.active : ''}`}
          >
            <img src={Icon} alt="" className={styles.icon} />
            <p className={styles.label}>{label}</p>
          </Link>
        ))}
      </nav>
      <Button onClick={() => handleLogout()} className={styles.button}>
        Выход
      </Button>
    </aside>
  );
}
export default AdminSidebar;
