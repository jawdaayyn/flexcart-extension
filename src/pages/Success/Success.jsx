import Button from "../../UI/Buttons/Button";
import "./Success.css";
import SuccessVector from "../../assets/Vector.svg";
function Success({ onClick }) {
  return (
    <div className="Success">
      <h1>FlexCart</h1>
      <img src={SuccessVector} width="80px" height="80px" />
      <p>Votre article a été ajouté avec succès !</p>
      <Button theme={1} onClick={onClick} value="Voir" />
    </div>
  );
}

export default Success;
