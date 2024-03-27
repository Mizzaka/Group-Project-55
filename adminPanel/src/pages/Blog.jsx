import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BlogTable from "../components/tables/BlogTable";
import CreateBlog from "../components/forms/CreateBlog";

const Blog = () => {
  return (
    <main>
      <Tabs variant="soft-rounded" colorScheme="green">
        <div className="mt-10 flex justify-center">
          <TabList>
            <Tab>Existing Blog's</Tab>
            <Tab>Create a Blog</Tab>
          </TabList>
        </div>
        <TabPanels>
          <TabPanel>
            <Box border='1px' borderColor='gray.200' borderRadius={"lg"} boxShadow={"md"}>            
                <BlogTable />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box border='1px' borderColor='gray.200' borderRadius={"lg"} boxShadow={"md"}>
              <CreateBlog />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};

export default Blog;
