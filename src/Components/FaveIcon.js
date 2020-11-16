import React from "react";

const FaveIcon = (props) => {
  const [Faved, setFaved] = React.useState("💔");
  const handleClick = () => {
    if ("💔") {
      setFaved("❤️");
    } else {
      setFaved("💔");
    }
  };
  return (
    <h1 id="faveIcon" onClick={handleClick}>
      {Faved}
    </h1>
  );
};

export default FaveIcon;
