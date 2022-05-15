import React from "react";
import { Button, Form } from "react-bootstrap";
import ImageWrapper from "../components/ImageWrapper";
import RichText from "../components/RichText";
import Wrapper from "../components/Wrapper";
import Navigation from "../Navigation";
import AccountForm from "./AccountForm";
import Block from "./Block";
import behtiHawa from "../assets/behtiHawa.png";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="container">
      <Navigation />
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
      <Wrapper
        className="bg-light my-4"
        left={
          <RichText
            heading="Promote you business"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
            color="text-warning"
          />
        }
        right={<ImageWrapper imageUrl={behtiHawa} className="m-4" />}
        leftSize={50}
        rightSize={40}
      />
      <Wrapper
        className="bg-light my-4"
        right={
          <RichText
            heading="Promote you business"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
            color="text-warning"
          />
        }
        left={<ImageWrapper imageUrl={behtiHawa} className="m-4" />}
        leftSize={50}
        rightSize={50}
      />
      <Wrapper
        className="bg-light my-4"
        left={
          <RichText
            heading="Promote you business"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
            color="text-warning"
          />
        }
        right={<ImageWrapper imageUrl={behtiHawa} className="m-4" />}
        leftSize={50}
        rightSize={40}
      />
      <Wrapper
        className="bg-light my-4"
        right={
          <RichText
            heading="Promote you business"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
            color="text-warning"
          />
        }
        left={<ImageWrapper imageUrl={behtiHawa} className="m-4" />}
        leftSize={50}
        rightSize={50}
      />
      <Wrapper
        className="bg-warning my-4"
        right={
          <RichText
            heading="Specific to your audience"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ante
      gravida, scelerisque mi vitae, aliquet urna. Proin ornare, ligula nec
      iaculis maximus, eros quam iaculis turpis, et venenatis velit erat in
      orci."
          />
        }
        left={<AccountForm />}
        leftSize={60}
        rightSize={40}
      />
    </div>
  );
};

export default Home;
