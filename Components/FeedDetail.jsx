import React, { Component, Fragment } from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./FeedDetail.css";

const FeedDetail = ({ match, history }) => {
  // console.log(match.params);
  return (
    <>
      <button className="backBtn" onClick={() => history.push("/feedlist")}>
        Back
      </button>
      <div>Feed Detail of Article{match.params.id}</div>
      <h3>{match.params.title}</h3>
      <p>{match.params.desc}</p>
    </>
  );
};


export default FeedDetail;
