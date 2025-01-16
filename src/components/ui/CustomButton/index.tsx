import { CustomButtonProps } from "@/interfaces/Button";
import Styles from "./styles.module.css";

const CustomButton = ({
  children,
  onClick,
  type,
  style,
  disabled = false,
  variant = "primary",
  isLoading,
  id,
}: CustomButtonProps) => {
  return (
    <button
      className={`${Styles.button} ${Styles[variant]} ${
        isLoading && Styles.isLoading
      }`}
      id={id}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
