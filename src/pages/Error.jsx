import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error">
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!Page not found.</h3>
          <p>Sorry, We can't find the page you are looking for.</p>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "25%",
      }}
    >
      <h3>Something went wrong</h3>
    </div>
  );
};

export default Error;
