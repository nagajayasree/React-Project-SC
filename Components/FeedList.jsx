import React, { Component, Fragment } from "react";
import "./FeedList.css";
import pic from "./dawn.jpg";
import { Row, Col, Container, Image } from "react-bootstrap";

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
        {
          id: 2,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
        {
          id: 3,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
        {
          id: 4,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
        {
          id: 5,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
        {
          id: 6,
          title: "Title of the Article",
          desc: "Some description of the article",
          dt: new Date().getDay,
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col sm={8} className="col-1">
              <div>Today</div>
              {this.state.posts.map((e) => {
                return (
                  <ul key={e.id} className="feed-item">
                    <a>
                      <div>
                        <Image alt="thumbnail" src={pic} className="img" />
                      </div>
                      <div className="content">
                        <h5>{e.title}</h5>
                        <p>{e.desc}</p>
                      </div>
                    </a>
                  </ul>
                );
              })}
            </Col>
            {/* <Col sm={3} className="col-2">
              <div>Leave Blank Space</div>
              <div>Leave Blank Space</div>
              <div>Leave Blank Space</div>
              <div>Leave Blank Space</div>
            </Col> */}
            {/* <Col sm={4}>
              <div>FeedList</div>
              <div>FeedList</div>
            </Col> */}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeedList;
