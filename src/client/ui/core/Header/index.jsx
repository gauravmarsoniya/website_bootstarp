import Topbar from './Topbar';
import TopNav from './Navbar';
const Header = ({ menus }) => {
  return (
    <>
      <Topbar />
      <TopNav menus={menus} />
    </>
  );
};
export default Header;
