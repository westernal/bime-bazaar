import { InputProps } from "@/interfaces/Input";
import Styles from "./style.module.css";

const CustomInput = (props: InputProps) => {
  return (
    <div className={Styles.inputWrapper}>
      <input
        className={`${Styles.input} ${props.errorMessage && Styles.error}`}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
      />

      {!props.errorDisabled && (
        <div
          className={`${Styles.errorMessage} ${
            props.errorMessage ? Styles.errorMessageVisible : ""
          }`}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
