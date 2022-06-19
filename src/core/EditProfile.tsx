import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Button, Col, Row } from "react-bootstrap";
import { MDBTextArea } from "mdb-react-ui-kit";
import Table from "react-bootstrap";

const ImgUpload = (props: any) => {
  const { onChange, src } = props;
  return (
    <div className="d-flex align-items-center rowC">
      <div className="d-flex flex-column">
        <span style={{ fontSize: "15px", lineHeight: "50px" }}>
          <label className="btnLbl" style={{ color: "black", fontWeight: 400 }}>
            Profile Picture
          </label>
        </span>
        <div className="d-flex position-relative img-wrap img-upload photoUploadIcon">
          <img className="profile-image" height={83} width={83} src={src} />
          <input id="photo-upload" type="file" onChange={onChange} />
          <button
            type="button"
            className="btn chooseFileButton"
            onClick={(e) => e.preventDefault()}
          >
            <label className="btnLbl">Choose File</label>
          </button>
        </div>
      </div>
    </div>
  );
};

const EditProfile = () => {
  const [state, setState] = useState({
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  });

  const photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setState({
        file: file,
        //@ts-ignore
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "4rem" }}>
      <p className="editProfileText">Edit Profile</p>
      <ImgUpload onChange={photoUpload} src={state.imagePreviewUrl} />
      <div className="grey-text edit-form">
        <Row>
          <Col>
            <MDBInput
              label="First name"
              labelClass="mdbInputLabel"
              // icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              className="mdbInput"
            />
          </Col>
          <Col>
            <MDBInput
              label="Last name"
              labelClass="mdbInputLabel"
              //icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              className="mdbInputLastName"
            />
          </Col>
        </Row>

        <MDBInput
          labelClass="mdbInputLabel"
          label="Website"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />
        <MDBInput
          label="Instagram"
          labelClass="mdbInputLabel"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />
        <MDBInput
          labelClass="mdbInputLabel"
          label="Twitter"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />
        <MDBInput
          label="Youtube"
          labelClass="mdbInputLabel"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />
        <MDBInput
          labelClass="mdbInputLabel"
          label="Pinterest"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />
        <MDBInput
          label="Twitter"
          labelClass="mdbInputLabel"
          //icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
          className="mdbInput"
        />

        <MDBInput
          type="textarea"
          label="Put your bio here"
          labelClass="mdbInputLabel"
          rows="5"
          className="mdbInputTextArea"
        />

        <MDBInput
          labelClass="mdbInputLabel"
          label="Change your Password"
          //icon="lock"
          group
          type="password"
          validate
          className="mdbInput"
        />
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultChecked2"
          />
          <label
            className="custom-control-label checkboxText"
            htmlFor="defaultChecked2"
            style={{ marginLeft: "15px" }}
          >
            Subscribe to the newsletter
          </label>
        </div>
        <div className="d-flex position-relative img-wrap img-upload photoUploadIcon">
          <button type="button" className="btn updateProfileButton">
            <label className="btnLbl">Update Profile</label>
          </button>

          <button type="button" className="btn cancelButton">
            <label className="btnLbl">Cancel</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
