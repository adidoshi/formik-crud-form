import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  theme,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import load from './load.gif';

function Read() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)

  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://61481f4a65467e0017384cde.mockapi.io/students")
      .then((resp) => {
        setLoading(false);
          setApiData(resp.data)
        });   
  }, []);

  const setData = (data) => {
    let { id, firstName, email, phone, password, skills, gender, course } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone Num", phone);
    localStorage.setItem("Password", password);
    localStorage.setItem("Course", course);
    localStorage.setItem("Skill", skills);
    localStorage.setItem("Gender", gender);
  };

  const viewUserDetails = (id) => {
    history.push(`view/${id}`)
  }

  const getData = () => {
    axios
      .get(`https://61481f4a65467e0017384cde.mockapi.io/students`)
      .then((response) => {
        setLoading(false);
        setApiData(response.data);
      });
  };

  const onDel = (id) => {
    axios
      .delete(`https://61481f4a65467e0017384cde.mockapi.io/students/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="heading">
        <Link to="/">
            <Button variant="outline" mx={4}>Back</Button>
          </Link>
            READ / VIEW Students</div>
        <Center>
          { loading ? (<img src={load} alt='.....' className='loadImg' />) : (<Table variant="striped" colorScheme="teal" style={{ width: "80%" }}>
            <TableCaption>Registered Students List</TableCaption>
            <Thead>
              <Tr>
                <Th className='sec-hideTwo'>First Name</Th>
                <Th className='sec-hide'>Email</Th>
                <Th className='sec-hide'>Phone Number</Th>
                <Th>Edit / Update</Th>
                <Th>Delete</Th>
                <Th>All Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {apiData.map((elem) => {
                return (
                  <Tr key={elem.id}>
                    <Td className='sec-hideTwo'>{elem.firstName}</Td>
                    <Td className='sec-hide'>{elem.email}</Td>
                    <Td className='sec-hide'>{elem.phone}</Td>
                    <Td>
                      <Link to='/update'>
                      <AiFillEdit className="edit-icon" onClick={() => setData(elem)} />
                      </Link>
                    </Td>
                    <Td>
                      <MdDelete className="del-icon" onClick={() => onDel(elem.id)} />
                    </Td>
                    <Td>
                    <BsFillEyeFill className="view-icon" onClick={() => viewUserDetails(elem.id)} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>) }
        </Center>
      </ChakraProvider>
    </>
  );
}

export default Read;
