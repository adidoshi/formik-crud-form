import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";
import FormikControl from "./FormikControl";
import { Button, Center } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router";

function EnrollmentForm() {
  let history = useHistory();

  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "MERN Stack (React)", value: "react" },
    { key: "MEAN Stack (Angular)", value: "angular" },
    { key: "Python Development", value: "python" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "js" },
  ];

  const options = [
    { key: "MALE", value: "male" },
    { key: "FEMALE", value: "female" },
  ];

  const iniitialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    skills: [],
    gender: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    phone: Yup.string()
      .required("Required")
      .phone("IN", true, "Phone number not valid, 10 digits required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    course: Yup.string().required("Required"),
    skills: Yup.array().min(1, "Minimum one skill required"),
    gender: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    axios
      .post(`https://61481f4a65467e0017384cde.mockapi.io/students`, {
        firstName: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        course: values.course,
        skills: values.skills,
        gender: values.gender,
      })
      .then(() => {
        history.push("/view");
      });
    onSubmitProps.resetForm({});
  };

  return (
    <>
      <Formik
        initialValues={iniitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="chakrainput"
                type="text"
                name="name"
                label="First Name"
                holder="Enter your name"
                val={formik.values.name}
              />
              <FormikControl
                control="chakrainput"
                type="email"
                name="email"
                label="Email"
                holder="Enter your email"
                val={formik.values.email}
              />
              <FormikControl
                control="chakrainput"
                type="text"
                name="phone"
                label="Phone Number"
                holder="Enter your mobile number"
                val={formik.values.phone}
              />
              <FormikControl
                control="chakrainput"
                type="password"
                name="password"
                label="Password"
                holder="Create a new password"
                val={formik.values.password}
              />
              <FormikControl
                control="chakrainput"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                val={formik.values.confirmPassword}
              />
              <FormikControl
                control="chakraselect"
                name="course"
                label="Specific Course Selection"
                options={dropdownOptions}
                val={formik.values.course}
              />
              <FormikControl
                control="checkbox"
                name="skills"
                label="Your skill set"
                options={checkboxOptions}
              />
              <FormikControl
                control="radio"
                name="gender"
                label="Gender"
                options={options}
              />
              <Center>
                <Button
                  type="submit"
                  colorScheme="orange"
                  variant="solid"
                  my={1}>
                  Submit
                </Button>

                <Button
                  type="reset"
                  ms={2}
                  colorScheme="orange"
                  variant="outline">
                  Reset
                </Button>
              </Center>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default EnrollmentForm;
