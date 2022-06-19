import React from "react";
import "./style.css";

const ImgUpload = (props: any) => {
  const { onChange, src } = props;
  return (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        {/* @ts-ignore */}
        <img for="photo-upload" src={src} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );
};

const Name = (props: any) => {
  const { onChange, value } = props;
  return (
    <div className="field">
      <label htmlFor="name">name:</label>
      <input
        id="name"
        type="text"
        onChange={onChange}
        maxLength={25}
        value={value}
        placeholder="Alexa"
        required
      />
    </div>
  );
};

const Status = (props: any) => {
  const { onChange, value } = props;
  return (
    <div className="field">
      <label htmlFor="status">status:</label>
      <input
        id="status"
        type="text"
        onChange={onChange}
        maxLength={35}
        value={value}
        placeholder="It's a nice day!"
        required
      />
    </div>
  );
};

const Profile = (props: any) => {
  const { onSubmit, src, name, status } = props;
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap">
            {/* @ts-ignore */}
            <img for="photo-upload" src={src} />
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit">
          Edit Profile{" "}
        </button>
      </form>
    </div>
  );
};

const Edit = (props: any) => {
  const { onSubmit, children } = props;
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className="save">
          Save{" "}
        </button>
      </form>
    </div>
  );
};

class CardProfile extends React.Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  editName = (e: any) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editStatus = (e: any) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;
    return (
      <div>
        {active === "edit" ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Status onChange={this.editStatus} value={status} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default CardProfile;
