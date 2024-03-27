import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const CreateBlog = () => {
  const [academicsFieldData, setAcademicsFieldData] = useState([]);
  const [createPost, setCreatePost] = useState({
    title: "",
    description: "",
    acaFId: 0,
    created_at: "",
  });

  useEffect(() => {
    const fetchAcademicsField = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/academicsField/"
        );
        setAcademicsFieldData(response.data.response);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load fields");
      }
    };
    fetchAcademicsField();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedCreatePost = {
      ...createPost,
      created_at: new Date().toISOString(), // Use ISO format for date
      [name]: name === "acaFId" ? parseInt(value) : value,
    };
    setCreatePost(updatedCreatePost);
  };  

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!createPost.title || !createPost.description) {
      toast.error("Please fill all the required fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/posts/",
        createPost
      );
      toast.success("Post created successfully");
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error("POST Request Failed:", error);
      toast.error("Failed to create post");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <FormControl className="p-5 grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={createPost.title}
              onChange={handleInputChange}
            />
            <FormHelperText>Enter the title of the post.</FormHelperText>
          </div>
          <div className="col-span-2">
            <FormLabel>Related Academic Field</FormLabel>
            <Select placeholder="Select Field" name={"acaFId"} onChange={handleInputChange}>
              {academicsFieldData.map((academicFields) => (
                <option key={academicFields.id} value={academicFields.id}>
                  {academicFields.field}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-span-4">
            <FormLabel>Description</FormLabel>
            <Textarea
              type="text"
              name="description"
              value={createPost.description}
              onChange={handleInputChange}
            />
            <FormHelperText>Enter the description of the post.</FormHelperText>
          </div>

          <div>
            <Button type="submit">Create Post</Button>
          </div>
        </FormControl>
      </form>
    </main>
  );
};

export default CreateBlog;
