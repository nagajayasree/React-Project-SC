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
      videoPosts=[];
    };
  }
  
    componentDidMount() {
    this.setState({ videoPosts: getvideoPosts() });
  }
  
  render() {
        const { videoPosts } = this.state;

    return (
      <Fragment>
        <div>VideoList</div>
        <Container fluid>
          <Row>
            <Col sm={10} className="video_col_1">
              {videoPosts.map((e) => {
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default VideoList;
