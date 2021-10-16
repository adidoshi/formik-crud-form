import React from "react";
import { Field } from "formik";
import {
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

function ChakraRadio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <Field name={name} id={name} {...rest}>
        {({ field, form }) => {
          return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <RadioGroup>
                <Stack direction="row" mb={4}>
                  {options.map((option) => {
                    return (
                      <React.Fragment key={option.key}>
                        <Radio
                          colorScheme="orange"
                          id={option.value}
                          {...field}
                          value={option.value}
                          checked={field.value === option.value}
                          >
                          {option.key}
                        </Radio>
                      </React.Fragment>
                    );
                  })}
                </Stack>
              </RadioGroup>
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
    </>
  );
}

export default ChakraRadio;
