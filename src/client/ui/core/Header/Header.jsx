import Topbar from './Topbar';
import Navbar from './Navbar';
import cn from 'classnames';

import styles from './Header.module.scss';
const Header = ({ menus }) => {
  return (
    <header className={cn(styles.header, 'position-absolute top-0 w-100')}>
      <Topbar />
      <Navbar menus={menus} />
    </header>
  );
};
export default Header;
