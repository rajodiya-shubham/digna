import React from "react";
import { Button, Form } from "react-bootstrap";
import RichText from "../components/RichText";
import Wrapper from "../components/Wrapper";
import AccountForm from "./AccountForm";

type BlockProps = {};

const Block: React.FC<BlockProps> = () => {
  return (
    <Wrapper
      className="bg-warning my-4"
      left={
        <RichText
          heading="Specific to your audience"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
        />
      }
      right={<AccountForm />}
      leftSize={60}
      rightSize={40}
    />
  );
};

export default Block;
