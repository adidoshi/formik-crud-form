import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { theme, ChakraProvider, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import load from "./load.gif";

function UserDetails() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://61481f4a65467e0017384cde.mockapi.io/students/${id}`)
      .then((resp) => {
        setLoading(false);
        setDetail(resp.data);
      });
  }, [id]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="heading">
          <Link to="/view">
            <Button variant="outline" mx={4}>
              Back
            </Button>
          </Link>
          Student Details
        </div>
        <Container className="box row" mb={4}>
          <div className="column">
            <div className="title">Serial No: </div>
            <div className="title">First Name: </div>
            <div className="title">Email: </div>
            <div className="title">Phone Number: </div>
            <div className="title">Password: </div>
            <div className="title">Intereseted Course: </div>
            <div className="title">Gender: </div>
            <div className="title">Skill Set: </div>
          </div>

          {loading ? (
            <img src={load} alt="....." className="loadUserImg" />
          ) : (
            <div className="column">
              <div className="detail">{detail.id}</div>
              <div className="detail">{detail.firstName}</div>
              <div className="detail">{detail.email}</div>
              <div className="detail">{detail.phone}</div>
              <div className="detail">{detail.password}</div>
              <div className="detail">{detail.course}</div>
              <div className="detail">{detail.gender}</div>
              <div className="detail">{detail.skills}</div>
            </div>
          )}
        </Container>
      </ChakraProvider>
    </>
  );
}

export default UserDetails;
