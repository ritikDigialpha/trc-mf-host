import React from "react";

const Header = ({ body }: any) => {
  return (
    <div style={{ width: "100%", height: "50px", background: "yellow" }}>
      Header
      {body}
    </div>
  );
};

export default Header;
