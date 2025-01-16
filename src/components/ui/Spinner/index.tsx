import Styles from "./styles.module.css";

const Spinner = ({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) => {
  return (
    <div className={`${Styles.spinner} ${Styles[variant]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
