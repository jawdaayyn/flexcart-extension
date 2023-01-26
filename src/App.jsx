import { useSelector, useDispatch } from "react-redux";
import { routerActions } from "./store/router/routerSlice";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Product/Cart";
import Success from "./pages/Success/Success";
import ScrappedCart from "./pages/ScrappedCart/ScrappedCart";
export const App = () => {
  const { page } = useSelector((state) => state.router);
  const { logged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const changePage = (page) => {
    dispatch(routerActions.toggle(page));
  };

  const switchRendering = () => {
    if (logged) {
      switch (page) {
        case "menu":
          return <Menu />;
        case "cart":
          return <Cart />;
        case "scrapped_cart":
          return <ScrappedCart />;
        case "success":
          return <Success onClick={() => changePage("menu")} />;
        default:
          return <Menu />;
      }
    } else {
      switch (page) {
        case "home":
          return <Home onClick={() => changePage("scrap")} />;
        case "auth":
          return <Auth />;
        default:
          return <Home onClick={() => changePage("auth")} />;
      }
    }
  };
  return <>{switchRendering()}</>;
};

export default App;
