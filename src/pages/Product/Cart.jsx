import "./Cart.css";
import Button from "../../UI/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { routerActions } from "../../store/router/routerSlice";
import { authApi } from "../../store/auth/authActions";
import { useState } from "react";
import Input from "../../UI/Inputs/Input";
function Cart() {
  const dispatch = useDispatch();
  const changePage = (page) => {
    dispatch(routerActions.toggle(page));
  };
  const [image, setImage] = useState("null");
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [brand, setBrand] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);

  const [addProduct] = authApi.endpoints.addToCart.useMutation();
  const { token } = useSelector((state) => state.auth);
  const sendFoo = async () => {
    try {
      await addProduct({
        token: token,
        brand: brand,
        description: description,
        image: image,
        name: name,
        price: price,
        url: url,
      });
      changePage("success");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="Cart">
      <h1>Ajoutez vous-même</h1>
      <div className="Cart-content">
        <div className="Cart-content-center">
          <span>Formats: JPG, PNG</span>
        </div>
        <Input onChange={(e) => setName(e.target.value)} label="Nom" />
        <Input onChange={(e) => setPrice(e.target.value)} label="Prix" />
        <Input onChange={(e) => setBrand(e.target.value)} label="Marque" />
        <Input onChange={(e) => setUrl(e.target.value)} label="Lien" />
        <Input
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
        />
        <Input
          onChange={(e) => setImage(e.target.value)}
          label="Lien de l'image"
        />
      </div>
      <div className="btn-group">
        <Button
          onClick={() => dispatch(routerActions.toggle("menu"))}
          theme={2}
          value="Annuler"
        />
        <Button onClick={sendFoo} theme={1} value="Ajouter" />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

export default Cart;
