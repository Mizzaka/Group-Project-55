import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import JobsTable from "../components/tables/JobsTable";
import CreateJob from "../components/forms/CreateJob";

const Jobs = () => {
  return (
    <main>
      <Tabs variant="soft-rounded" colorScheme="green">
        <div className="mt-10 flex justify-center">
          <TabList>
            <Tab>Existing jobs</Tab>
            <Tab>Create a job</Tab>
          </TabList>
        </div>
        <TabPanels>
          <TabPanel>
            <Box border='1px' borderColor='gray.200' borderRadius={"lg"} boxShadow={"md"}>            
               <JobsTable />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box border='1px' borderColor='gray.200' borderRadius={"lg"} boxShadow={"md"}>
              <CreateJob />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}

export default Jobs