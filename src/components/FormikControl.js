import React from "react";
import ChakraCheckbox from './ChakraCheckbox'
import ChakraInput from "./ChakraInput";
import ChakraRadio from "./ChakraRadio";
import ChakraSelect from "./ChakraSelect";
import CheckboxGroup from "./CheckboxGroup";
import RadioButton from "./RadioButton"

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "chakraselect":
      return <ChakraSelect {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
      case "chakracheckbox":
        return <ChakraCheckbox {...rest} />;
      case "chakraradio":
        return <ChakraRadio {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
