import Button from "../../UI/Buttons/Button";
import "./Home.css";
function Home({ onClick }) {
  return (
    <div className="Home">
      <h1>FlexCart</h1>
      <p>
        Pour utiliser cet outil vous devez d'abord vous connecter à votre compte
        FlexCart
      </p>
      <Button theme={1} onClick={onClick} value="Continuer" />
    </div>
  );
}

export default Home;
