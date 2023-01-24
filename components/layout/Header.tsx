import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="w-full bg-white p-5">
      <nav className="relative left-64 space-x-6">
        <NavMenu menuPath="/products">물품 관리</NavMenu>
        <NavMenu menuPath="/tasks">업무 관리</NavMenu>
        <NavMenu menuPath="/company">회사 관리</NavMenu>
      </nav>
    </header>
  );
};

export default Header;
