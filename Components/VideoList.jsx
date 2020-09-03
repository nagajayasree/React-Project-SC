import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "./dawn.jpg";
import "./VideoList.css";
import { getvideoPosts } from "../DataServices/fakeVideoPostService";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPosts=[],
       currentPage: 1,
      pageSize: 3,
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
        const VideoPosts = paginate(videoPosts, currentPage, pageSize);


    return (
      <Fragment>
        <div>VideoList</div>
        <Container fluid>
            <Col sm={10} className="video_col_1">
              <Row className="video_row">
              {VideoPosts.map((e) => {
                return (
                  <ul key={e.id} className="video_item">
                    <a>
                      <div>
                        <Card className="video_card">
                          <Card.Img
                            className="video_img"
                            src={img}
                            alt="image"
                          />
                          <Card.Body className="video_body">
                            <div className="video_content">
                              <Link
                                to={`/videoDetail/${e.id}/${e.title}/${e.description}/${e.link}`}
                                >
                                <Card.Title className="video_title">
                                  <h5>{e.title}</h5>
                                </Card.Title>
                              </Link>
                              <Card.Text className="video_desc">
                                <p>{e.description}</p>
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </a>
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
