import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "./dawn.jpg";
import "./VideoList.css";
import { getvideoPosts } from "../DataServices/fakeVideoPostService";
import _ from "lodash";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPosts=[],
       currentPage: 1,
      pageSize: 3,
      sortPosts: { path: "title", order: "desc" },
    };
  }
  
  componentDidMount() {
    this.setState({ videoPosts: getvideoPosts() });
  }
  
   handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  
  render() {
        const { videoPosts,currentPage,pageSize } = this.state;
        const sorted = _.orderBy(videoPosts, [sortPosts.path], [sortPosts.order]);
        const VideoPosts = paginate(sorted, currentPage, pageSize);


    return (
      <Fragment>
        <div>VideoList</div>
        <Container fluid>
            <Col sm={10} className="video_col_1">
              <Row className="video_row">
              {VideoPosts.map((e) => {
                return (
                  <ul key={e.id} className="video_item">
                     <Card className="video_card">
                      <iframe
                        className="video_link"
                        src={e.link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                      picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <Card.Body className="video_body">
                        <span className="video_content">
                          <Link
                            to={`/videoDetail/${e.id}/${e.title}/${e.description}/${e.link}`}
                          >
                            <Card.Title className="video_title">
                              <h5>{e.title}</h5>
                            </Card.Title>
                            <Card.Text className="video_desc">
                              <span>{e.description}</span>
                            </Card.Text>
                          </Link>
                        </span>
                      </Card.Body>
                    </Card> 
                  </ul>
                );
              })}
             </Row>
              <AddPagination
              postsCount={videoPosts.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Col>
        </Container>
      </Fragment>
    );
  }
}

export default VideoList;
