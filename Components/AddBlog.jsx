import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AddBlog.css";

class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container fluid>
          <form action="" className="AddBlogForm">
            <h5 className="AddBlogHead">Add Your Blog</h5>
            <Row>
              <Col sm={9} className="addBlog">
                <Row sm={4}>
                  <label htmlFor="name">
                    <Col sm={4}>Name</Col>
                  </label>
                  <Col sm={4}>:</Col>
                  <Col sm={4}>
                    <input type="text" className="addblog_name" />
                  </Col>
                </Row>
                <Row sm={4}>
                  <label htmlFor="mailId">
                    <Col sm={4}>Email</Col>
                  </label>
                  <Col sm={4}>:</Col>
                  <Col sm={4}>
                    <input type="email" className="addblog_email" />
                  </Col>
                </Row>
                <Row sm={4}>
                  <label htmlFor="url">
                    <Col sm={4}>URL</Col>
                  </label>
                  <Col sm={4}>:</Col>
                  <Col sm={4}>
                    <input type="url" className="addblog_url" />
                  </Col>
                </Row>
                <Row sm={4}>
                  <label htmlFor="feed">
                    <Col sm={4}>Feed</Col>
                  </label>
                  <Col sm={4}>:</Col>
                  <Col sm={4}>
                    <textarea
                      className="addblog_url"
                      rows="6"
                      cols="50"
                      maxLength="100"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <input type="submit" value="Submit" className="addBlg_Subtn" />
              </Col>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}

export default AddBlog;
