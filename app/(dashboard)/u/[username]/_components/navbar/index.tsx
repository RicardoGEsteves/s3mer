import Actions from "./actions";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-primary-foreground px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />

      <Actions />
    </nav>
  );
};

export default Navbar;
