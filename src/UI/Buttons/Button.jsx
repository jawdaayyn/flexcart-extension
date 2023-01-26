import styles from "./Button.module.css";
const Button = ({ value, onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className={theme == 1 ? styles.ui_1 : styles.ui_2}
    >
      {value}
    </button>
  );
};

export default Button;
