import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
const Task = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Enter task" />
        </Col>
        <Col>
          <Form.Control as="select">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control as="select">
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Col>
        <Col>
          <Button variant="info">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Task;
