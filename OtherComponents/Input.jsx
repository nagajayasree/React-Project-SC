import React from "react";
import { Col } from "react-bootstrap";

export const Textarea = ({ name, onChange, value, error, type }) => {
  return (
    <>
      <label htmlFor="feed">Feed</label>
      <textarea
        value={value}
        type={type}
        onChange={onChange}
        className="form-control"
        id="feed"
        name={name}
        rows="6"
        cols="250"
        maxLength="100"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

const Input = ({ name, label, onChange, value, error, type }) => {
  return (
    <>
      <Col sm={12}>
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          id={name}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </>
  );
};

export default Input;
