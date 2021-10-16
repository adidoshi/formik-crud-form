import React from "react";
import { Field } from "formik";
import {
  Select,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

function ChakraSelect(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <Field name={name} id={name} {...rest}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Select
                id={name}
                {...rest}
                {...field}
                bg="tomato"
                color="white"
                borderColor="tomato"
                mb={4}>
                {options.map((option) => {
                  return (
                    <option
                      key={option.value}
                      value={option.value}
                      style={{ color: "black" }}>
                      {option.key}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
    </>
  );
}

export default ChakraSelect;
