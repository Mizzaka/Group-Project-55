import React, {useState, useEffect} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const BlogTable = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/posts/");
        setPostData(response.data.response.reverse());
      } catch (error) {
        console.error(error);
        toast.error("Failed to load posts");
      }
    };
    fetchPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://localhost:5000/api/v1/posts/")
    } catch (error) {
      
    }
  }

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Created-Date</Th>
              <Th>Related Academic Field</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {postData.map((post) => (
              <Tr key={post.id}>
                <Td>{post.title}</Td>
                <Td>{post.created_at.slice(1, 10)}</Td>
                <Td>{post.relatedAcaField.field}</Td>
                <Td><Button colorScheme="blue">Update</Button></Td>
                <Td><Button colorScheme="red">Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogTable;
