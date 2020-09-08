import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../OtherComponents/Form";
import Joi from "joi-browser";
import "./AddBlog.css";

class AddBlog extends Form {
  state = {
    data: {
      blogName: "",
      mailId: "",
      url: "",
      feed: "",
    },
    errors: {},
  };

  schema = {
    blogName: Joi.string().required().label("Blog Name"),
    mailId: Joi.string().required().email().label("Email-Id"),
    url: Joi.string().required().url().label("URL"),
    feed: Joi.string().required().label("Feed"),
  };

  doSubmit = () => {
    //Call the Server
    console.log("Submitted");
  };

  render() {

    return (
      <>
        <Container fluid>
          <h5 className="AddBlogHead">Add Your Blog</h5>
          <form className="AddBlogForm" onSubmit={this.handleSubmit}>
            <Row>
              <Col sm={9} className="addBlog">
                <Row sm={4} className="inputField">
                  {this.renderInput("blogName", "Blog Name")}
                </Row>
                <Row sm={4} className="inputField">
                  {this.renderInput("url", "URL")}
                </Row>
                <Row sm={4} className="inputField">
                  {this.renderInput("mailId", "Email-Id")}
                </Row>
                <Row sm={4} className="inputField">
                  {this.renderTextarea("feed", "Feed", 6, 250)}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>{this.renderButton("Save")}</Col>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}

export default AddBlog;
