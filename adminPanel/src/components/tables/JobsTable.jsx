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

const JobsTable = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/job/");
        setJobData(response.data.response.reverse());
      } catch (error) {
        console.error(error);
        toast.error("Failed to load posts");
      }
    };
    fetchJobData();
  }, []);

  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete(`http://localhost:5000/api/v1/job/${id}`);
  //       // Remove the deleted post from the state
  //       setJobData(jobData.filter((job) => job.id !== id));
  //       toast.info("Post deleted successfully!");
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Unable to delete post at the moment");
  //     }
  //   };

  return (
    <>
    <TableContainer>
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th>Job Title</Th>
            <Th>Location</Th>
            <Th>Experience Level</Th>
            <Th>Job Type</Th>
            <Th>Related Academic Field</Th>
            <Th>Minimum Academic Qualification</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobData.map((job) => (
            <Tr key={job.id}>
              <Td>{job.jobTitle}</Td>
              <Td>{job.jobLocation}</Td>
              <Td>{job.jobLevel.level}</Td>
              <Td>{job.jobType.type}</Td>
              <Td>{job.academicField.field}</Td>
              <Td>{job.academicQualificationType.type}</Td>
              <Td>
                <Button colorScheme="blue">Update</Button>
              </Td>
              <Td>
                <Button colorScheme="red" onClick={() => handleDelete(job.id)}>
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

export default JobsTable;
