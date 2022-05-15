import React from "react";
import { Form, Button } from "react-bootstrap";

type AccountFormProps = {};

const AccountForm: React.FC<AccountFormProps> = () => {
  return (
    <Form className="bg-light p-4 m-4 border rounded">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control />
      </Form.Group>
      <Button variant="outline-warning" className="align-self-center">
        Create Account
      </Button>
    </Form>
  );
};

export default AccountForm;
