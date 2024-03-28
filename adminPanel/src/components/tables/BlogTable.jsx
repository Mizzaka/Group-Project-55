import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { toast } from "sonner";
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
      return await axios.delete(
        `http://localhost:5000/api/v1/posts/${id}`
      ).toast.info("Post deleted successfully!");    
    } catch (error) {
      console.error(error);
      toast.error("Unable to delete post at the moment");
    }
  };

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
                <Td>{post.created_at.slice(0, 10)}</Td>
                <Td>{post.relatedAcaField.field}</Td>
                <Td>
                  <Button colorScheme="blue">Update</Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogTable;
