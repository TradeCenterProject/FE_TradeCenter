import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="w-full bg-white p-6">
      <nav className="relative left-64 space-x-6">
        <NavMenu path="/products/lists">물품 관리</NavMenu>
        <NavMenu path="/tasks/lists">업무 관리</NavMenu>
        <NavMenu path="/company/employee">회사 관리</NavMenu>
      </nav>
    </header>
  );
};

export default Header;
