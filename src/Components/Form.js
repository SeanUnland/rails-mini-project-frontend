import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.song);

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("this is formData:", formData);
    props.handleSubmit(formData);
    props.history.push("/");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={() => {
        handleSubmit();
      }}
    >
      <label id="title" for="title">
        Title
      </label>
      <br />
      <input
        type="text"
        id="form-title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label id="artist" for="artist">
        Artist
      </label>
      <br />
      <input
        type="text"
        id="form-artist"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <br />
      <label id="time" for="time">
        Time
      </label>
      <br />
      <input
        type="text"
        id="form-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <br />
      <input id="createButton" type="submit" value={props.label} />
    </form>
  );
};

export default Form;

// <form onSubmit={handleSubmit}>
