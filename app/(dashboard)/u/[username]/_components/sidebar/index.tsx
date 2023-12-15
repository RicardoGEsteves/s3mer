import Toggle from "./toggle";
import Wrapper from "./wrapper";
import Navigation from "./navigation";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
