import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BlogTable from "../components/tables/BlogTable";

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
            <p>Create a Blog</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};

export default Blog;
