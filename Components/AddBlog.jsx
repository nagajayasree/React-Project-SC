import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AddBlog.css";
import Input, { Textarea } from "../OtherComponents/Input";

class AddBlog extends Component {
  state = {
    info: {
      blogName: "",
      mailId: "",
      url: "",
      feed: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { info } = this.state;
    if (info.blogName.trim() === "") {
      errors.blogName = "Name is Required.";
    }
    if (info.mailId.trim() === "") {
      errors.mailId = "Email-id is Required.";
    }
    if (info.url.trim() === "") {
      errors.url = "URL is Required.";
    }
    if (info.feed.trim() === "") {
      errors.feed = "Feed is Required.";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const info = { ...this.state.info };
    info[input.name] = input.value;
    this.setState({ info });
  };

  render() {
    const { info, errors } = this.state;

    return (
      <>
        <Container fluid>
          <h5 className="AddBlogHead">Add Your Blog</h5>
          <form className="AddBlogForm" onSubmit={this.handleSubmit}>
            <Row>
              <Col sm={9} className="addBlog">
                <Row sm={4} className="inputField">
                  <Input
                    name="blogName"
                    value={info.blogName}
                    label="Name"
                    onChange={this.handleChange}
                    type="text"
                    error={errors.blogName}
                  />
                </Row>
                <Row sm={4} className="inputField">
                  <Input
                    name="mailId"
                    value={info.mailId}
                    label="Email-Id"
                    onChange={this.handleChange}
                    type="email"
                    error={errors.mailId}
                  />
                </Row>
                <Row sm={4} className="inputField">
                  <Input
                    name="url"
                    value={info.url}
                    label="URL"
                    onChange={this.handleChange}
                    type="url"
                    error={errors.url}
                  />
                </Row>
                <Row sm={4} className="inputField">
                  <Col sm={12}>
                    <Textarea
                      name="feed"
                      value={info.feed}
                      onChange={this.handleChange}
                      type="text"
                      error={errors.feed}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <button className="btn btn-primary addBlg_Subtn">Submit</button>
              </Col>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}

export default AddBlog;
