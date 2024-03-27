import React, {useState, useEffect} from "react";
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

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Created-Date</Th>
              <Th>Related Academic Field</Th>
            </Tr>
          </Thead>
          <Tbody>
            {postData.map((post) => (
              <Tr key={post.id}>
                <Td>{post.title}</Td>
                <Td>{post.created_at}</Td>
                <Td>{post.relatedAcaField.field}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogTable;
