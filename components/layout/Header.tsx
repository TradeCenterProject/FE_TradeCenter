import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="w-full bg-white p-5">
      <nav className="relative left-64 space-x-6">
        <NavMenu path="/products">물품 관리</NavMenu>
        <NavMenu path="/tasks">업무 관리</NavMenu>
        <NavMenu path="/company">회사 관리</NavMenu>
      </nav>
    </header>
  );
};

export default Header;
