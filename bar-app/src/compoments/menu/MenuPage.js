import Search from "../Search";
import Filter from "./Filter";
import BarList from "./barList";

const MenuPage = () => {
    return (
      <div>
        <Search/>
        <Filter/>
        <BarList/>
      </div>
    );
  };
  
  export default MenuPage;