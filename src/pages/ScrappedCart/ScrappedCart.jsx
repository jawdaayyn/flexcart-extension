import "./ScrappedCart.css";
import Button from "../../UI/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { routerActions } from "../../store/router/routerSlice";
import { authApi } from "../../store/auth/authActions";
import Input from "../../UI/Inputs/Input";
import { useState } from "react";
function ScrappedCart() {
  const dispatch = useDispatch();
  const changePage = (page) => {
    dispatch(routerActions.toggle(page));
  };
  const [error, setError] = useState();
  const { brand, name, price, url, description, image } = useSelector(
    (state) => state.cart.cart
  );
  const [newBrand, setBrand] = useState(null);
  const [newImage, setImage] = useState(null);
  const [newName, setName] = useState(null);
  const [newDesc, setDesc] = useState(null);
  const [newPrice, setPrice] = useState(null);
  const [newUrl, setUrl] = useState(null);

  /*console.log(
    `price: ${price}, name: ${name}, brand: ${brand}, url: ${url}, description: ${description}, image: ${image}`
  );*/
  const [addProduct] = authApi.endpoints.addToCart.useMutation();
  const { token } = useSelector((state) => state.auth);
  const sendFoo = async () => {
    try {
      await addProduct({
        token: token,
        brand: brand || newBrand,
        description: description || newDesc,
        image: image || newImage,
        name: name || newName,
        price: price || newPrice,
        url: url || newUrl,
      });
      changePage("success");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="ScrappedCart">
      <h1>Ajoutez vous-même</h1>
      <div className="ScrappedCart-content">
        <div className="ScrappedCart-content-center">
          <span>Formats: JPG, PNG</span>
        </div>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          label="Nom"
        />
        <Input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          label="Prix"
        />
        <Input
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          label="Marque"
        />
        <Input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          label="Lien"
        />
        <Input
          onChange={(e) => setDesc(e.target.value)}
          value={description}
          label="Description"
        />
        <Input
          onChange={(e) => setImage(e.target.value)}
          value={image}
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

export default ScrappedCart;
