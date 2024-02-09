import React from "react";
import PageTitle from "../Title/PageTitle";
import TaskTitle from "../Title/TaskTitle";
import { Toaster } from "react-hot-toast";
const Home = () => {
  return (
    <>
      <PageTitle />
      <TaskTitle />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.5rem",
          },
        }}
      ></Toaster>
    </>
  );
};

export default Home;
