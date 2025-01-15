import { InputProps } from "@/interfaces/Input";

const CustomInput = (props: InputProps) => {
  return (
    <div>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
      />
      {props.errorMessage && <span>{props.errorMessage}</span>}
    </div>
  );
};

export default CustomInput;
