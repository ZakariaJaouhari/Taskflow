import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { logout } from '../features/auth/authSlice';
import styles from './Header.module.css'; 
  
interface HeaderProps { 
  title: string; 
  onMenuClick: () => void; 
} 
  
export default function Header({ title, onMenuClick }: HeaderProps) { 
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  return ( 
    <header className={styles.header}> 
      <div className={styles.left}> 
        <button className={styles.menuBtn} onClick={onMenuClick}>☰</button> 
        <h1 className={styles.logo}>{title}</h1> 
      </div> 
      <div className={styles.right}> 
        {user?.name && <span className={styles.userName}>{user.name}</span>} 
        {user && ( 
          <button className={styles.logoutBtn} onClick={() => dispatch(logout())}> 
            Déconnexion 
          </button> 
        )} 
      </div> 
    </header> 
  ); 
} 