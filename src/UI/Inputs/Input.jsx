import styles from "./Input.module.css";
const Input = ({ label, type, onChange, value }) => {
  return (
    <div className={styles.input_group}>
      <label>{label}</label>
      <input value={value} type={type || "text"} onChange={onChange} />
    </div>
  );
};

export default Input;
