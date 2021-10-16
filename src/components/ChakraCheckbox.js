import React from "react";
import { Field } from "formik";
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";

function ChakraCheckbox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <Field name={name} id={name} {...rest}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              {options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <Checkbox
                      colorScheme="green"
                      ms={3}
                      id={option.value}
                      {...rest}
                      {...field}
                      value={option.value}
                      mb={4}
                      checked={field.value.includes(option.value)}>
                      {option.key}
                    </Checkbox>
                  </React.Fragment>
                );
              })}
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
    </>
  );
}

export default ChakraCheckbox;
