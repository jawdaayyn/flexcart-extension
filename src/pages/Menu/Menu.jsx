/*global chrome*/

import "./Menu.css";
import { useState } from "react";
import { RiUser3Line } from "react-icons/ri";
import { BiEditAlt, BiLogOut } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cartSlice";
import { authActions } from "../../store/auth/authSlice";
import { routerActions } from "../../store/router/routerSlice";
import { cartApi } from "../../store/cart/cartActions";
const Menu = () => {
  const [url, setUrl] = useState(null);
  const [Scrap] = cartApi.endpoints.Scrap.useMutation();
  let cart = {
    brand: null,
    description: null,
    image: null,
    name: null,
    price: null,
    url: url,
  };

  let newCart = useSelector((state) => state.cart.cart);

  const handleScrap = async (url) => {
    await Scrap({
      url: url,
    }).then((data) => {
      console.log(data);
      dispatch(cartActions.editCart(data.data));
      console.log(newCart);
      changePage("scrapped_cart");
    });
  };
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setUrl(tabs[0].url);
  });
  const dispatch = useDispatch();
  const dispatchLogout = () => {
    dispatch(authActions.logout());
  };
  const changePage = (page) => {
    dispatch(routerActions.toggle(page));
  };
  return (
    <div className="Menu">
      <h1>FlexCart</h1>
      <div className="Menu-nav">
        <a
          className="Menu-nav__item"
          href="http://localhost:3000"
          target="_blank"
        >
          <RiUser3Line />
          <span>Accéder à votre espace</span>
        </a>
        <div onClick={() => changePage("cart")} className="Menu-nav__item">
          <BiEditAlt />
          <span>Ajouter manuellement</span>
        </div>
        <div
          onClick={() => {
            handleScrap(cart.url);
          }}
          className="Menu-nav__item"
        >
          <FiSave />
          <span>Ajouter cet article</span>
        </div>
        <BiLogOut
          onClick={dispatchLogout}
          style={{
            position: "absolute",
            fontSize: "25px",
            cursor: "pointer",
            right: 0,
            top: 0,
            background: "rgb(73 118 163)",
            paddingLeft: "10px",
            color: "white",
            padding: "1% 0 1% 1.05%",
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
