import React from "react";
import { theme, ChakraProvider, Container, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EnrollmentForm from "./EnrollmentForm";

function Create() {
  return (
    <>
      <ChakraProvider theme={theme}>
          <Center>
          <Link to='/view'><Button colorScheme="blue" my={4}>View Students</Button></Link>
          </Center>
          <div className='mainHeading'>Formik Execution (CRUD)</div>
        <div className="heading">Course Enrollment Form</div>
        <Container className="box" mb={4}>
          <EnrollmentForm />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default Create;
