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
        feedPosts: [],
      currentPage: 1,
      pageSize: 4,
    };
  }
  
  componentDidMount() {
    this.setState({ feedPosts: getfeedPosts() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { feedPosts, currentPage, pageSize } = this.state;

    const FeedPosts = paginate(feedPosts, currentPage, pageSize);
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col sm={9} className="col-1">
              {FeedPosts.map((e) => {
                return (
                  <ul key={e.id} className="feed-item">
                    <a>
                      <div>
                        <Image alt="thumbnail" src={pic} className="img" />
                      </div>
                         <Link to="/feedDetail/${e.id}/${e.title}/${e.description}" className="title">
                            <div className="content">
                               <h5 className="heading1">{e.title}</h5>
                               <p className="heading2">{e.description}</p>
                        </div>
                        </Link>
                    </a>
                  </ul>
                );
              })}
              <AddPagination
                postsCount={feedPosts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeedList;
