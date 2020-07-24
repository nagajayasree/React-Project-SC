import React, { Component, Fragment } from "react";
import "./FeedList.css";
import pic from "./dawn.jpg";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeedDetail from "./FeedDetail";

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Title of the Item1 Title of the Item1 Title of the Item1",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
        },
        {
          id: 2,
          title: "Title of the Item2",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
        },
        {
          id: 3,
          title: "Title of the Item3",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
        },
        {
          id: 4,
          title: "Title of the Item4",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
        },
        {
          id: 5,
          title: "Title of the Item5",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
        },
        {
          id: 6,
          title: "Title of the Item6",
          desc:
            "Some description of the Item Some description of the Item Some description of the Item Some description of the Item",
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
                         <Link to="/feedDetail/${e.id}/${e.title}/${e.desc}" className="title">
                            <div className="content">
                               <h5 className="heading1">{e.title}</h5>
                               <p className="heading2">{e.desc}</p>
                        </div>
                        </Link>
                    </a>
                  </ul>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeedList;
