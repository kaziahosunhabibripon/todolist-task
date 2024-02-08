import React from "react";
import { Container } from "react-bootstrap";
import Task from "../Task/Task";

const Home = () => {
  return (
    <div className="bg-secondary">
      <Container className="container text-center">
        <div className="text-light">
          <h1 className="py-5">To Do List</h1>
        </div>
        <Task />
      </Container>
    </div>
  );
};

export default Home;
