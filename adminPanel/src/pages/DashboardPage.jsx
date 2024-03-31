import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { toast } from "sonner";
import axios from "axios";
import { Box } from "@chakra-ui/react";

const DashboardPage = () => {
  const [channelData, setChannelData] = useState({});
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const response = await axios.get(
          "https://api.thingspeak.com/channels/2488166/feeds.json?results"
        );
        setChannelData(response.data.channel);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load channel data");
      }
    };
    fetchChannelData();
  }, []);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const response = await axios.get(
          "https://api.thingspeak.com/channels/2488166/feeds.json?results=15"
        );
        setFeedData(response.data.feeds.reverse());
      } catch (error) {
        console.error(error);
        toast.error("Failed to load feed data");
      }
    };
    fetchFeedData();
  }, []);

  const chartFeedData = feedData;

  return (
    <main className="mt-10 grid grid-cols-4 gap-4">
      <Box className="col-span-2">
        <Card className="w-auto">
          <CardHeader>
            <h1 className="text-2xl font-bold">Humidity</h1>
          </CardHeader>
          <CardBody>
            <LineChart width={750} height={300} data={chartFeedData}>
              {console.log(chartFeedData)}
              <Line
                type="monotone"
                dataKey="field1"
                fill="#52B1D2"
                stroke="#52B1D2"
              />
              <XAxis dataKey="entry_id" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </CardBody>
        </Card>
      </Box>
      <Box className="col-span-2">
        <Card className="w-auto">
          <CardHeader>
            <h1 className="text-2xl font-bold">Temperature</h1>
          </CardHeader>
          <CardBody>
            <BarChart width={750} height={300} data={chartFeedData}>
              {console.log(chartFeedData)}
              <Bar
                type="monotone"
                dataKey="field2"
                fill="#FF0000"
                stroke="#FF0000"
              />

              <XAxis dataKey="entry_id" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </CardBody>
        </Card>
      </Box>
      <Box className="col-span-2">
        <Card className="w-auto">
          <CardHeader>
            <h1 className="text-2xl font-bold">Soil Moisture</h1>
          </CardHeader>
          <CardBody>
            <BarChart width={750} height={300} data={chartFeedData}>
              {console.log(chartFeedData)}
              <Bar
                type="monotone"
                dataKey="field3"
                fill="#964B00"
                stroke="#964B00"
              />
              <XAxis dataKey="entry_id" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </CardBody>
        </Card>
      </Box>
      <Box className="col-span-2">
        <Card className="w-auto">
          <CardHeader>
            <h1 className="text-2xl font-bold">Rain Value</h1>
          </CardHeader>
          <CardBody>
            <BarChart width={750} height={300} data={chartFeedData}>
              {console.log(chartFeedData)}
              <Bar
                type="monotone"
                dataKey="field4"
                stroke="#ADD8E6"
                fill="#ADD8E6"
              />

              <XAxis dataKey="entry_id" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </CardBody>
        </Card>
      </Box>
      <Box className="col-span-4">
        <Card className="w-auto">
          <CardHeader>
            <h1 className="text-2xl font-bold">Water Level</h1>
          </CardHeader>
          <CardBody>
            <BarChart width={1600} height={300} data={chartFeedData}>
              {console.log(chartFeedData)}
              <Bar type="monotone" dataKey="field5" stroke="#8884d8" />

              <XAxis dataKey="entry_id" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </CardBody>
        </Card>
      </Box>
    </main>
  );
};

export default DashboardPage;
