import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authActions } from "../../store/auth/authSlice";
import { apiAuthentication } from "../../config/auth";
import { routerActions } from "../../store/router/routerSlice";
import Input from "../../UI/Inputs/Input";
import Button from "../../UI/Buttons/Button";
function Auth() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { logged } = useSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await apiAuthentication({ email, password });
      console.log(token);
      if (token) {
        dispatch(authActions.setToken(token));
        console.log(logged);
        dispatch(routerActions.toggle("main_menu"));
        localStorage.setItem("token", token);
        window.location.reload();
      } else {
        setErrorMessage("Email ou mdp invalide");
      }
    } catch {
      setErrorMessage("Email ou mdp invalide");
    }
  };

  return (
    <div className="Auth">
      <h1>Connexion - FlexCart</h1>
      <Input
        type="email"
        label="Votre e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="Auth__btn__group">
        <Button value="Connexion" theme={1} onClick={(e) => handleSubmit(e)} />
      </div>
      {errorMessage && <span className="text-red">{errorMessage}</span>}
    </div>
  );
}

export default Auth;
