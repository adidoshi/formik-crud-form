import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import FormikControl from "./FormikControl";
import { Button, Center, theme, ChakraProvider, Container, } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { Link } from "react-router-dom";

function Update() {

  let history = useHistory();
const [id, setId] = useState(null);

useEffect(() => {
  setId(localStorage.getItem('ID'));
}, [])

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
    name: (localStorage.getItem('First Name')),
    email: (localStorage.getItem('Email')),
    phone: (localStorage.getItem('Phone Num')),
    password: (localStorage.getItem('Password')),
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

  const onSubmit = (values) => {

    axios.put(`https://61481f4a65467e0017384cde.mockapi.io/students/${id}`, {
      firstName: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      course: values.course,
      skills: values.skills,
      gender: values.gender,
    })
    .then(() => {
      history.push('/view')})
  }

    return (
        <>
        <ChakraProvider theme={theme}>
          <Center>
          <Link to='/view'><Button colorScheme="blue" my={4}>View Students</Button></Link>
          </Center>
        <div className="heading">Course Enrollment Form</div>
        <Container className="box" mb={4}>
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
                  val={formik.values.name}
                />
                <FormikControl
                  control="chakrainput"
                  type="email"
                  name="email"
                  label="Email"
                  val={formik.values.email}
                />
                <FormikControl
                  control="chakrainput"
                  type="text"
                  name="phone"
                  label="Phone Number"
                  val={formik.values.phone}
                />
                <FormikControl
                  control="chakrainput"
                  type="text"
                  name="password"
                  label="Password"
                  val={formik.values.password}
                />
                <FormikControl
                  control="chakrainput"
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  holder="Make changes in password"
                />
                <FormikControl
                  control="chakraselect"
                  name="course"
                  label="Specific Course Selection"
                  options={dropdownOptions}
                />
                <FormikControl
                  control="chakracheckbox"
                  name="skills"
                  label="Your skill set"
                  options={checkboxOptions}
                />
                <FormikControl
                  control="chakraradio"
                  name="gender"
                  label="Gender"
                  options={options}
                />
                <Center>
                    <Button
                      type="submit"
                      colorScheme="orange"
                      variant="solid">Update</Button>
                </Center>
              </Form>
            );
          }}
        </Formik>
        </Container>
      </ChakraProvider>
        </>
    )
}

export default Update
