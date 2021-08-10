import React from "react";

const brand = () => {
  return (
    <div className="bran d-flex justify-content-center">
      <a className="navbar-brand" href="/">
        <img
          src="/images/logo.png"
          alt="Mola"
          width={100}
          height={100}
          className="d-inline-block align-text-center"
        />
      </a>
    </div>
  );
};

export default brand;
